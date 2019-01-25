const mongoose = require('mongoose');
const regexes = require('./regexes');
const enumerations = require('./enumerations');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email:
        {
            type:String,
            validate: regexes.email,
            lowercase: true,
            required:true
        },
    sendgrid_id: {
        type: String
    },
    linkedin_id :
        {
            type: String
        },
    password_hash:
        {
            type:String,
            required:true
        },
    salt:
        {
            type: String,
            required: true
        },
    type:
        {
            type:String,
            enum: ['candidate', 'company'],
            required:true
        },
    is_verify:
        {
            type:Number, // 0 = false, 1 = true
            enum: [0, 1],
            default:0
        },
    social_type:
        {
            type:String,
            enum: ['GOOGLE', 'LINKEDIN', '']
        },
    is_approved: // DELETE ME
        {
            type:Number, // 0 = false, 1 = true
            enum: [0, 1],
            required:true,
            default:0
        },
    jwt_token:
        {
            type:String,
        },
    verify_email_key:
        {
            type:String, // This is a hash
        },
    forgot_password_key:
        {
            type:String, // This is a hash
        },
    ref_link: // DELETE ME
        {
            type:String,
            // validate: regexes.url
        },
    refered_id: // DELETE ME
        {
            type: Schema.Types.ObjectId,
            //ref : 'Referrals' // UNCOMMENT ME
        },
    referred_email :
        {
            type:String
        },
    is_admin:
        {
            type:Number, // 0 = false, 1 = true
            enum: [0, 1],
            required:true,
            default:0
        },
    is_unread_msgs_to_send:
        {
            type:Boolean,
            default:true
        },
    disable_account:
        {
            type:Boolean,
            default:false
        },
    dissable_account_timestamp:
        {
            type:Date
        },
    viewed_explanation_popup:
        {
            type:Boolean,
            default:false
        },
    candidate: {
        type: {
            base_city: String,
            base_country: {
                type: String,
                enum: enumerations.countries
            },
            blockchain: {
                type: {
                    commercial_skills : [new Schema({
                        skill: {
                            type: String,
                            enum: enumerations.otherSkills
                        },
                        exp_year: {
                            type: String,
                            enum: enumerations.exp_years
                        }
                    })],

                    formal_skills : [new Schema({
                        skill: {
                            type: String,
                            enum: enumerations.otherSkills
                        },
                        exp_year: {
                            type: String,
                            enum: enumerations.exp_years
                        }
                    })],
                }
            },
			status:{
				type:[{
					status: {
						type: String,
						enum: enumerations.candidateStatus,
						required:true,
					},
					reason: {
						type: String,
						enum: enumerations.statusReasons
					},
					timestamp: {
						type: Date,
						required:true,
					}
				}]
			}
        }
    },
    conversations: [new Schema({
        user_id: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required:true
        },
        count: {
            type: Number,
            required: true
        },
        unread_count: {
            type: Number,
            required: true
        },
        last_message: {
            type: Date,
            required: true
        }
    })],
	first_approved_date:{
		type: Date
	},
    created_date: // DELETE ME
        {
            type: Date
        }

});

module.exports = mongoose.model('User', UserSchema);




