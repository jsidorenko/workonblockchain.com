//This file contains all the roles, languages used in app

export const constants = {
  blockchainPlatforms: [
    {name:'Bitcoin', value:'Bitcoin', checked:false},
    {name:'Ethereum', value:'Ethereum', checked:false},
    {name:'Ripple', value:'Ripple', checked:false},
    {name:'Stellar', value:'Stellar', checked:false},
    {name:'Hyperledger Fabric', value:'Hyperledger Fabric', checked:false},
    {name:'Hyperledger Sawtooth', value:'Hyperledger Sawtooth', checked:false},
    {name:'Quorum', value:'Quorum', checked:false},
    {name:'Corda', value:'Corda', checked:false},
    {name:'EOS', value:'EOS', checked:false},
    {name:'NEO', value:'NEO', checked:false},
    {name:'Waves', value:'Waves', checked:false},
    {name:'Steemit', value:'Steemit', checked:false},
    {name:'Lisk', value:'Lisk', checked:false},
    {name:'Quantum', value:'Quantum', checked:false},
    {name:'Tezos', value:'Tezos', checked:false},
    {name:'Cardano', value:'Cardano', checked:false},
    {name:'Litecoin', value:'Litecoin', checked:false},
    {name:'Monero', value:'Monero', checked:false},
    {name:'ZCash', value:'ZCash', checked:false},
    {name:'IOTA', value:'IOTA', checked:false},
    {name:'NEM', value:'NEM', checked:false},
    {name:'NXT', value:'NXT', checked:false},
  ],
  otherSkills: [
    {name:'P2P protocols', value:'P2P protocols', checked:false},
    {name:'Distributed computing and networks', value:'Distributed computing and networks', checked:false},
    {name:'Security', value:'Security', checked:false},
    {name:'Formal verification', value:'Formal verification', checked:false},
    {name:'Cryptography', value:'Cryptography', checked:false},
    {name:'Game theory', value:'Game theory', checked:false},
    {name:'Economics', value:'Economics', checked:false},
    {name:'Smart contract audits', value:'Smart contract audits', checked:false},
    {name:'Zero Knowlege Proofs', value:'Zero Knowlege Proofs', checked:false},
  ],
  experimented: [
    {name:'Bitcoin', value:'Bitcoin', checked:false},
    {name:'Ethereum', value:'Ethereum', checked:false},
    {name:'Ripple', value:'Ripple', checked:false},
    {name:'Hyperledger Fabric', value:'Hyperledger Fabric', checked:false},
    {name:'Corda', value:'Corda', checked:false},
    {name:'EOS', value:'EOS', checked:false},
    {name:'Waves', value:'Waves', checked:false},
    {name:'Steemit', value:'Steemit', checked:false},
    {name:'Lisk', value:'Lisk', checked:false},
    {name:'Quantum', value:'Quantum', checked:false},
    {name:'Tezos', value:'Tezos', checked:false},
    {name:'Cardano', value:'Cardano', checked:false},
    {name:'Litecoin', value:'Litecoin', checked:false},
    {name:'Monero', value:'Monero', checked:false},
    {name:'ZCash', value:'ZCash', checked:false},
    {name:'IOTA', value:'IOTA', checked:false},
    {name:'NEM', value:'NEM', checked:false},
    {name:'NXT', value:'NXT', checked:false},
    {name:'Dash', value:'Dash', checked:false},
    {name:'Doge', value:'Doge', checked:false},
  ],
  experienceYears: [
    {name:'0-1', value:'0-1', checked:false},
    {name:'1-2', value:'1-2', checked:false},
    {name:'2-4', value:'2-4', checked:false},
    {name:'4-6', value:'4-6', checked:false},
    {name:'6+', value:'6+', checked:false}
  ],
  workAvailability: [
    {name: "Now" , value: "Now" },
    {name: "1 month notice period" , value: "1 month" },
    {name: "2 months notice period", value: "2 months" },
    {name: "3 months notice period", value: "3 months" },
    {name: "3+ months notice period", value: "Longer than 3 months" }
  ],
  year: [
    "2023","2022","2021","2020","2019","2018","2017","2016","2015","2014","2013","2012","2011","2010","2009","2008","2007","2006","2005","2004","2003","2002","2001","2000","1999","1998","1997","1996","1995","1994"
  ],
  workBlockchainInterests: [
    {name:'Enterprise blockchain', value:'Enterprise blockchain', checked:false},
    {name:'Public blockchain', value:'Public blockchain', checked:false},
    {name:'Blockchain infrastructure', value:'Blockchain infrastructure', checked:false},
    {name:'Smart contract development', value:'Smart contract development', checked:false},
    {name:'Decentralized applications (dapps)', value:'Decentralized applications (dapps)', checked:false},
    {name:"I don't know", value:"I don't know", checked:false},
  ],
  workRoles: [
    {name:'Backend developer', value:'Backend Developer', checked:false},
    {name:'Frontend developer', value:'Frontend Developer', checked:false},
    {name:'UI developer', value:'UI Developer', checked:false},
    {name:'UX designer', value:'UX Designer', checked:false},
    {name:'Fullstack developer', value:'Fullstack Developer', checked:false},
    {name:'Blockchain developer', value:'Blockchain Developer', checked:false},
    {name:'Smart dontract developer', value:'Smart Contract Developer', checked:false},
    {name:'Architect', value:'Architect', checked:false},
    {name:'Devops', value:'DevOps', checked:false},
    {name:'Software tester', value:'Software Tester', checked:false},
    {name:'CTO', value:'CTO', checked:false},
    {name:'Technical lead', value:'Technical Lead', checked:false},
    {name:'Product manager', value:'Product Manager', checked:false},
    {name:'Intern developer', value:'Intern Developer', checked:false},
    {name:'Researcher', value:'Researcher', checked:false},
    {name:'Mobile app developer', value:'Mobile app developer', checked:false},
    {name:'Data scientist', value:'Data scientist', checked:false},
    {name:'Security specialist', value:'Security specialist', checked:false},
    {name:'Technical business analyst', value:'Technical business analyst', checked:false},
    {name:'Technical project manager', value:'Technical project manager', checked:false},
    {name:'Machine learning engineer', value:'Machine learning engineer', checked:false},
  ],
  currencies: [
    "£ GBP" ,"€ EUR" , "$ USD"
  ],
  nationalities: [
    {name:'Afghan' ,value:'Afghan'},{name:'Albanian' ,value:'Albanian'},{name:'Algerian' ,value:'Algerian'},
    {name:'American', value: 'American'},{name:'Andorran', value: 'Andorran'},{name:'Angolan', value: 'Angolan'},
    {name:'Antiguans', value: 'Antiguans'},{name:'Argentinean', value: 'Argentinean'},{name:'Armenian', value: 'Armenian'},
    {name:'Australian', value: 'Australian'},{name:'Austrian', value: 'Austrian'},{name:'Azerbaijani', value: 'Azerbaijani'},
    {name:'Bahamian', value: 'Bahamian'},{name:'Bahraini', value: 'Bahraini'},{name:'Bangladeshi', value: 'Bangladeshi'},
    {name:'Barbadians', value: 'Barbadians'},{name:'Barbudans', value: 'Barbudans'},{name:'Botswana', value: 'Botswana'},
    {name:'Belorussian', value: 'Belorussian'},{name:'Belgian', value: 'Belgian'},{name:'Belizean', value: 'Belizean'},
    {name:'Beninese', value: 'Beninese'},{name:'Bhutanese', value: 'Bhutanese'},{name:'Bolivian', value: 'Bolivian'},
    {name:'Bosnian', value: 'Bosnian'},{name:'Brazilian', value: 'Brazilian'},{name:'British', value: 'British'},
    {name:'Bruneian', value: 'Bruneian'},{name:'Bulgarian', value: 'Bulgarian'},{name:'Burkinabe', value: 'Burkinabe'},
    {name:'Burmese', value: 'Burmese'},{name:'Burundian', value: 'Burundian'},{name:'Cambodian', value: 'Cambodian'},
    {name:'Cameroonian', value: 'Cameroonian'},{name:'Canadian', value: 'Canadian'},{name:'Cape Verdean', value: 'Cape Verdean'},
    {name:'Central African', value: 'Central African'},{name:'Chadian', value: 'Chadian'},{name:'Chilean', value: 'Chilean'},
    {name:'Chinese', value: 'Chinese'},{name:'Colombian', value: 'Colombian'},{name:'Comoran', value: 'Comoran'},
    {name:'Congolese', value: 'Congolese'},{name:'Costa Rican', value: 'Costa Rican'},{name:'Croatian', value: 'Croatian'},
    {name:'Cuban', value: 'Cuban'},{name:'Cypriot', value: 'Cypriot'},{name:'Czech', value: 'Czech'},
    {name:'Danish', value: 'Danish'},{name:'Djibouti', value: 'Djibouti'},{name:'Dominican', value: 'Dominican'},
    {name:'Dutch', value: 'Dutch'},{name:'Dutchman', value: 'Dutchman'},{name:'Dutchwoman', value: 'Dutchwoman'},
    {name:'East Temporise', value: 'East Temporise'},{name:'Ecuadorean', value: 'Ecuadorean'},{name:'Egyptian', value: 'Egyptian'},
    {name:'Emirian', value: 'Emirian'},{name:'Equatorial Guinean', value: 'Equatorial Guinean'},{name:'Eritrean', value: 'Eritrean'},
    {name:'Estonian', value: 'Estonian'},{name:'Ethiopian', value: 'Ethiopian'},{name:'Fijian', value: 'Fijian'},
    {name:'Filipino', value: 'Filipino'},{name:'Finnish', value: 'Finnish'},{name:'French', value: 'French'},
    {name:'Gabonese', value: 'Gabonese'},{name:'Gambian', value: 'Gambian'},{name:'Georgian', value: 'Georgian'},
    {name:'German', value: 'German'},{name:'Ghanaian', value: 'Ghanaian'},{name:'Greek', value: 'Greek'},
    {name:'Grenadian', value: 'Grenadian'},{name:'Guatemalan', value: 'Guatemalan'},{name:'Guinea-Bissauan', value: 'Guinea-Bissauan'},
    {name:'Guinean', value: 'Guinean'},{name:'Guyanese', value: 'Guyanese'},{name:'Haitian', value: 'Haitian'},
    {name:'Herzegovinians', value: 'Herzegovinians'},{name:'Honduran', value: 'Honduran'},{name:'Hungarian', value: 'Hungarian'},
    {name:'I-Kiribati', value: 'I-Kiribati'},{name:'Icelander', value: 'Icelander'},{name:'Indian', value: 'Indian'},
    {name:'Indonesian', value: 'Indonesian'},{name:'Iranian', value: 'Iranian'},{name:'Iraqi', value: 'Iraqi'},
    {name:'Irish', value: 'Irish'},{name:'Israeli', value: 'Israeli'},{name:'Italian', value: 'Italian'},
    {name:'Ivorian', value: 'Ivorian'},{name:'Jamaican', value: 'Jamaican'},{name:'Japanese', value: 'Japanese'},
    {name:'Jordanian', value: 'Jordanian'},{name:'Kazakhstani', value: 'Kazakhstani'},{name:'Kenyan', value: 'Kenyan'},
    {name:'Kittian and Nevisian', value: 'Kittian and Nevisian'},{name:'Kuwaiti', value: 'Kuwaiti'},{name:'Kyrgyz', value: 'Kyrgyz'},
    {name:'Laotian', value: 'Laotian'},{name:'Latvian', value: 'Latvian'},{name:'Lebanese', value: 'Lebanese'},
    {name:'Liberian', value: 'Liberian'},{name:'Libyan', value: 'Libyan'},{name:'Liechtensteiner', value: 'Liechtensteiner'},
    {name:'Lithuanian', value: 'Lithuanian'},{name:'Luxembourger', value: 'Luxembourger'},{name:'Macedonian', value: 'Macedonian'},
    {name:'Malagasy', value: 'Malagasy'},{name:'Malawian', value: 'Malawian'},{name:'Malaysian', value: 'Malaysian'},
    {name:'Maldivian', value: 'Maldivian'},{name:'Malian', value: 'Malian'},{name:'Maltese', value: 'Maltese'},
    {name:'Marshallese', value: 'Marshallese'},{name:'Mauritanian', value: 'Mauritanian'},{name:'Mauritian', value: 'Mauritian'},
    {name:'Mexican', value: 'Mexican'},{name:'Micronesian', value: 'Micronesian'},{name:'Moldovan', value: 'Moldovan'},
    {name:'Monacan', value: 'Monacan'},{name:'Mongolian', value: 'Mongolian'},{name:'Moroccan', value: 'Moroccan'},
    {name:'Mosotho', value: 'Mosotho'},{name:'Motswana', value: 'Motswana'},{name:'Mozambican', value: 'Mozambican'},
    {name:'Namibian', value: 'Namibian'},{name:'Nauruan', value: 'Nauruan'},{name:'Nepalese', value: 'Nepalese'},
    {name:'Netherlander', value: 'Netherlander'},{name:'New Zealander', value: 'New Zealander'},{name:'Ni-Vanuatu', value: 'Ni-Vanuatu'},
    {name:'Nicaraguan', value: 'Nicaraguan'},{name:'Nigerian', value: 'Nigerian'},{name:'Nigerien', value: 'Nigerien'},
    {name:'North Korean', value: 'North Korean'},{name:'Northern Irish', value: 'Northern Irish'},{name:'Norwegian', value: 'Norwegian'},
    {name:'Omani', value: 'Omani'},{name:'Pakistani', value: 'Pakistani'},{name:'Palauan', value: 'Palauan'},
    {name:'Panamanian', value: 'Panamanian'},{name:'Papua New Guinean', value: 'Papua New Guinean'},{name:'Paraguayan', value: 'Paraguayan'},
    {name:'Peruvian', value: 'Peruvian'},{name:'Polish', value: 'Polish'},{name:'Portuguese', value: 'Portuguese'},
    {name:'Qatari', value: 'Qatari'},{name:'Romanian', value: 'Romanian'},{name:'Russian', value: 'Russian'},
    {name:'Rwandan', value: 'Rwandan'},{name:'Saint Lucian', value: 'Saint Lucian'},{name:'Salvadoran', value: 'Salvadoran'},
    {name:'Samoan', value: 'Samoan'},{name:'San Marinese', value: 'San Marinese'},{name:'Sao Tomean', value: 'Sao Tomean'},
    {name:'Saudi', value: 'Saudi'},{name:'Scottish', value: 'Scottish'},{name:'Senegalese', value: 'Senegalese'},
    {name:'Serbian', value: 'Serbian'},{name:'Seychellois', value: 'Seychellois'},{name:'Sierra Leonean', value: 'Sierra Leonean'},
    {name:'Singaporean', value: 'Singaporean'},{name:'Slovakian', value: 'Slovakian'},{name:'Slovenian', value: 'Slovenian'},
    {name:'Solomon Islander', value: 'Solomon Islander'},{name:'Somali', value: 'Somali'},{name:'South African', value: 'South African'},
    {name:'South Korean', value: 'South Korean'},{name:'Spanish', value: 'Spanish'},{name:'Sri Lankan', value: 'Sri Lankan'},
    {name:'Sudanese', value: 'Sudanese'},{name:'Surinamese', value: 'Surinamese'},{name:'Swazi', value: 'Swazi'},
    {name:'Swedish', value: 'Swedish'},{name:'Swiss', value: 'Swiss'},{name:'Syrian', value: 'Syrian'},
    {name:'Taiwanese', value: 'Taiwanese'},{name:'Tajik', value: 'Tajik'},{name:'Tanzanian', value: 'Tanzanian'},
    {name:'Thai', value: 'Thai'},{name:'Togolese', value: 'Togolese'},{name:'Tongan', value: 'Tongan'},
    {name:'Trinidadian or Tobagonian', value: 'Trinidadian or Tobagonian'},{name:'Tunisian', value: 'Tunisian'},{name:'Turkish', value: 'Turkish'},
    {name:'Tuvaluan', value: 'Tuvaluan'},{name:'Ugandan', value: 'Ugandan'},{name:'Ukrainian', value: 'Ukrainian'},
    {name:'Uruguayan', value: 'Uruguayan'},{name:'Uzbekistani', value: 'Uzbekistani'},{name:'Venezuelan', value: 'Venezuelan'},
    {name:'Vietnamese', value: 'Vietnamese'},{name:'Welsh', value: 'Welsh'},{name:'Yemenite', value: 'Yemenite'},
    {name:'Zambian', value: 'Zambian'},{name:'Zimbabwean', value: 'Zimbabwean'}
  ],
  current_work: [
    {name:'I currently work here', value:'current', checked:false}
  ],
  countries:[
    {name:'Afghanistan', value:'Afghanistan'},{name:'Albania', value:'Albania'},{name:'Algeria', value:'Algeria'},
    {name:'Andorra', value:'Andorra'},{name:'Angola', value:'Angola'},{name:'Antigua & Deps', value:'Antigua & Deps'},
    {name:'Argentina', value:'Argentina'},{name:'Armenia', value:'Armenia'},{name:'Australia', value:'Australia'},
    {name:'Austria', value:'Austria'},{name:'Azerbaijan', value:'Azerbaijan'},{name:'Bahamas', value:'Bahamas'},
    {name:'Bahrain', value:'Bahrain'},{name:'Bangladesh', value:'Bangladesh'},{name:'Barbados', value:'Barbados'},
    {name:'Belarus', value:'Belarus'},{name:'Belgium', value:'Belgium'},{name:'Belize', value:'Belize'},
    {name:'Benin', value:'Benin'},{name:'Bhutan', value:'Bhutan'},{name:'Bolivia', value:'Bolivia'},
    {name:'Bosnia Herzegovina', value:'Bosnia Herzegovina'},{name:'Botswana', value:'Botswana'},{name:'Brazil', value:'Brazil'},
    {name:'Brunei', value:'Brunei'},{name:'Bulgaria', value:'Bulgaria'},{name:'Burkina', value:'Burkina'},
    {name:'Burundi', value:'Burundi'},{name:'Cambodia', value:'Cambodia'},{name:'Cameroon', value:'Cameroon'},
    {name:'Canada', value:'Canada'},{name:'Cape Verde', value:'Cape Verde'},{name:'Central African Rep', value:'Central African Rep'},
    {name:'Chad', value:'Chad'},{name:'Chile', value:'Chile'},{name:'China', value:'China'},
    {name:'Colombia', value:'Colombia'},{name:'Comoros', value:'Comoros'},{name:'Congo', value:'Congo'},
    {name:'Congo {Democratic Rep}', value:'Congo {Democratic Rep}'},{name:'Costa Rica', value:'Costa Rica'},{name:'Croatia', value:'Croatia'},
    {name:'Cuba', value:'Cuba'},{name:'Cyprus', value:'Cyprus'},{name:'Czech Republic', value:'Czech Republic'},
    {name:'Denmark', value:'Denmark'},{name:'Djibouti', value:'Djibouti'},{name:'Dominica', value:'Dominica'},
    {name:'Dominican Republic', value:'Dominican Republic'},{name:'Ecuador', value:'Ecuador'},{name:'East Timor', value:'East Timor'},
    {name:'Egypt', value:'Egypt'},{name:'El Salvador', value:'El Salvador'},{name:'Equatorial Guinea', value:'Equatorial Guinea'},
    {name:'Eritrea', value:'Eritrea'},{name:'Estonia', value:'Estonia'},{name:'Ethiopia', value:'Ethiopia'},
    {name:'Fiji', value:'Fiji'},{name:'Finland', value:'Finland'},{name:'France', value:'France'},
    {name:'Gabon', value:'Gabon'},{name:'Gambia', value:'Gambia'},{name:'Georgia', value:'Georgia'},
    {name:'Germany', value:'Germany'},{name:'Ghana', value:'Ghana'},{name:'Greece', value:'Greece'},
    {name:'Grenada', value:'Grenada'},{name:'Guatemala', value:'Guatemala'},{name:'Guinea', value:'Guinea'},
    {name:'Guinea-Bissau', value:'Guinea-Bissau'},{name:'Guyana', value:'Guyana'},{name:'Haiti', value:'Haiti'},
    {name:'Honduras', value:'Honduras'},{name:'Hungary', value:'Hungary'},{name:'Iceland', value:'Iceland'},
    {name:'India', value:'India'},{name:'Indonesia', value:'Indonesia'},{name:'Iran', value:'Iran'},
    {name:'Iraq', value:'Iraq'},{name:'Ireland {Republic}', value:'Ireland {Republic}'},{name:'Israel', value:'Israel'},
    {name:'Italy', value:'Italy'},{name:'Ivory Coast', value:'Ivory Coast'},{name:'Jamaica', value:'Jamaica'},
    {name:'Japan', value:'Japan'},{name:'Jordan', value:'Jordan'},{name:'Kazakhstan', value:'Kazakhstan'},
    {name:'Kenya', value:'Kenya'},{name:'Kiribati', value:'Kiribati'},{name:'Korea North', value:'Korea North'},
    {name:'Korea South', value:'Korea South'},{name:'Kosovo', value:'Kosovo'},{name:'Kuwait', value:'Kuwait'},
    {name:'Kyrgyzstan', value:'Kyrgyzstan'},{name:'Laos', value:'Laos'},{name:'Latvia', value:'Latvia'},
    {name:'Lebanon', value:'Lebanon'},{name:'Lesotho', value:'Lesotho'},{name:'Liberia', value:'Liberia'},
    {name:'Libya', value:'Libya'},{name:'Liechtenstein', value:'Liechtenstein'},{name:'Lithuania', value:'Lithuania'},
    {name:'Luxembourg', value:'Luxembourg'},{name:'Macedonia', value:'Macedonia'},{name:'Madagascar', value:'Madagascar'},
    {name:'Malawi', value:'Malawi'},{name:'Malaysia', value:'Malaysia'},{name:'Maldives', value:'Maldives'},
    {name:'Mali', value:'Mali'},{name:'Malta', value:'Malta'},{name:'Marshall Islands', value:'Marshall Islands'},
    {name:'Mauritania', value:'Mauritania'},{name:'Mauritius', value:'Mauritius'},{name:'Mexico', value:'Mexico'},
    {name:'Micronesia', value:'Micronesia'},{name:'Moldova', value:'Moldova'},{name:'Monaco', value:'Monaco'},
    {name:'Mongolia', value:'Mongolia'},{name:'Montenegro', value:'Montenegro'},{name:'Morocco', value:'Morocco'},
    {name:'Mozambique', value:'Mozambique'},{name:'Myanmar, {Burma}', value:'Myanmar, {Burma}'},{name:'Namibia', value:'Namibia'},
    {name:'Nauru', value:'Nauru'},{name:'Nepal', value:'Nepal'},{name:'Netherlands', value:'Netherlands'},
    {name:'New Zealand', value:'New Zealand'},{name:'Nicaragua', value:'Nicaragua'},{name:'Niger', value:'Niger'},
    {name:'Nigeria', value:'Nigeria'},{name:'Norway', value:'Norway'},{name:'Oman', value:'Oman'},
    {name:'Pakistan', value:'Pakistan'},{name:'Palau', value:'Palau'},{name:'Panama', value:'Panama'},
    {name:'Papua New Guinea', value:'Papua New Guinea'},{name:'Paraguay', value:'Paraguay'},{name:'Peru', value:'Peru'},
    {name:'Philippines', value:'Philippines'},{name:'Poland', value:'Poland'},{name:'Portugal', value:'Portugal'},
    {name:'Qatar', value:'Qatar'},{name:'Romania', value:'Romania'},{name:'Russian Federation', value:'Russian Federation'},
    {name:'Rwanda', value:'Rwanda'},{name:'St Kitts & Nevis', value:'St Kitts & Nevis'},{name:'St Lucia', value:'St Lucia'},
    {name:'Saint Vincent & the Grenadines', value:'Saint Vincent & the Grenadines'},{name:'Samoa', value:'Samoa'},{name:'San Marino', value:'San Marino'},
    {name:'Sao Tome & Principe', value:'Sao Tome & Principe'},{name:'Saudi Arabia', value:'Saudi Arabia'},{name:'Senegal', value:'Senegal'},
    {name:'Serbia', value:'Serbia'},{name:'Seychelles', value:'Seychelles'},{name:'Sierra Leone', value:'Sierra Leone'},
    {name:'Singapore', value:'Singapore'},{name:'Slovakia', value:'Slovakia'},{name:'Slovenia', value:'Slovenia'},
    {name:'Solomon Islands', value:'Solomon Islands'},{name:'Somalia', value:'Somalia'},{name:'South Africa', value:'South Africa'},
    {name:'South Sudan', value:'South Sudan'},{name:'Spain', value:'Spain'},{name:'Sri Lanka', value:'Sri Lanka'},
    {name:'Sudan', value:'Sudan'},{name:'Suriname', value:'Suriname'},{name:'Swaziland', value:'Swaziland'},
    {name:'Sweden', value:'Sweden'},{name:'Switzerland', value:'Switzerland'},{name:'Syria', value:'Syria'},
    {name:'Taiwan', value:'Taiwan'},{name:'Tajikistan', value:'Tajikistan'},{name:'Tanzania', value:'Tanzania'},
    {name:'Thailand', value:'Thailand'},{name:'Togo', value:'Togo'},{name:'Tonga', value:'Tonga'},
    {name:'Trinidad & Tobago', value:'Trinidad & Tobago'},{name:'Tunisia', value:''},{name:'Turkey', value:'Turkey'},
    {name:'Turkmenistan', value:'Turkmenistan'},{name:'Tuvalu', value:'Tuvalu'},{name:'Uganda', value:'Uganda'},
    {name:'Ukraine', value:'Ukraine'},{name:'United Arab Emirates', value:'United Arab Emirates'},{name:'United Kingdom', value:'United Kingdom'},
    {name:'United States', value:'United States'},{name:'Uruguay', value:'Uruguay'},{name:'Uzbekistan', value:'Uzbekistan'},
    {name:'Vanuatu', value:'Vanuatu'},{name:'Vatican City', value:'Vatican City'},{name:'Venezuela', value:'Venezuela'},
    {name:'Vietnam', value:'Vietnam'},{name:'Yemen', value:'Yemen'},{name:'Zambia', value:'Zambia'},
    {name:'Zimbabwe', value:'Zimbabwe'}
  ],
  calen_month: ["January","February","March","April","May","June","July","August","September","October","November","December"],
  programmingLanguages: [
    {name:'Java', value:'Java', checked:false},{name:'C', value:'C', checked:false},
    {name:'C++', value:'C++', checked:false},{name:'C#', value:'C#', checked:false},
    {name:'Python', value:'Python', checked:false},{name:'Visual Basic .NET', value:'Visual Basic .NET', checked:false},
    {name:'PHP', value:'PHP', checked:false},{name:'JavaScript', value:'JavaScript', checked:false},
    {name:'Delphi/Object Pascal', value:'Delphi/Object Pascal', checked:false},{name:'Swift', value:'Swift', checked:false},
    {name:'Perl', value:'Perl', checked:false},{name:'Ruby', value:'Ruby', checked:false},
    {name:'Assembly language', value:'Assembly language', checked:false},{name:'R', value:'R', checked:false},
    {name:'Visual Basic', value:'Visual Basic', checked:false},{name:'Objective-C', value:'Objective-C', checked:false},
    {name:'Go', value:'Go', checked:false},{name:'MATLAB', value:'MATLAB', checked:false},
    {name:'PL/SQL', value:'PL/SQL', checked:false},{name:'Scratch', value:'Scratch', checked:false},
    {name:'Solidity', value:'Solidity', checked:false},{name:'Serpent', value:'Serpent', checked:false},
    {name:'LLL', value:'LLL', checked:false},{name:'Nodejs', value:'Nodejs', checked:false},
    {name:'Scala', value:'Scala', checked:false},{name:'Rust', value:'Rust', checked:false},
    {name:'Kotlin', value:'Kotlin', checked:false},{name:'Haskell', value:'Haskell', checked:false},
    {name:'Erlang', value:'Erlang', checked:false},
  ],
  jobTypes: ['Full time' , 'Part time' , 'Freelance'],
  job_type: ["Part time", "Full time"],
  candidateStatus: [
    {value:'created', name:'Created'},
    {value:'wizard completed', name:'Wizard Completed'},
    {value:'approved', name:'Approved'},
    {value:'reviewed', name:'Reviewed'},
    {value: 'updated', name: 'Updated'},
    {value : 'updated by admin' , name: 'Updated by admin'},
    {value:'rejected', name:'Rejected'},
    {value:'deferred', name:'Deferred'},
    {value:'other', name:'Other'}
  ],
  admin_checks_email_verify: [
    {value:1, name:'Verified'},
    {value:0, name:'Not Verified'}
  ],
  admin_checks_candidate_account: [
    {value:false, name:'Enabled'},
    {value:true, name:'Disabled'}
  ],
  chatMsgTypes: [
    {value:'normal', name:'Normal' , checked:false},
    {value:'job_offer', name:'Job offer sent' , checked:false},
    {value:'job_offer_accepted', name:'Job offer accepted' , checked:false},
    {value:'job_offer_rejected', name:'Job offer rejected' , checked:false},
    {value:'interview_offer', name:'Interview offer sent' , checked:false},
    {value:'employment_offer', name:'Employment offer sent' , checked:false},
    {value:'employment_offer_accepted', name:'Employment offer accepted' , checked:false},
    {value:'employment_offer_rejected', name:'Employment offer rejected' , checked:false},
  ],
  set_candidate_status: [
    {value:'approved', name:'Approved'},
    {value:'reviewed', name: 'Reviewed'},
    {value:'rejected', name:'Rejected'},
    {value:'deferred', name:'Deferred'},
    {value:'other', name:'Other'}
  ],
  statusReasons_rejected: [
    {value:'garbage', name:'Garbage'},
    {value:'recruiter', name:'Recruiter'},
    {value:'not technical', name:'Not Technical'},
    {value:'other', name:'Other'}
  ],
  statusReasons_deferred: [
    {value:'profile incomplete', name:'Profile Incomplete'},
    {value:'not looking for job', name:'Not Looking for Job'},
    {value:'job found', name:'Job Found'},
    {value:'not responded', name:'Not Responded'},
    {value:'other', name:'Other'}
  ],
  email_notificaiton: ['Never' , 'Daily' , '3 days' , 'Weekly'],
  blockchainPlatforms_for_companies: [
    {name:'Bitcoin', value:'Bitcoin', checked:false},
    {name:'Ethereum', value:'Ethereum', checked:false},
    {name:'Ripple', value:'Ripple', checked:false},
    {name:'Stellar', value:'Stellar', checked:false},
    {name:'Hyperledger Fabric', value:'Hyperledger Fabric', checked:false},
    {name:'Hyperledger Sawtooth', value:'Hyperledger Sawtooth', checked:false},
    {name:'Quorum', value:'Quorum', checked:false},
    {name:'Corda', value:'Corda', checked:false},
    {name:'EOS', value:'EOS', checked:false},
    {name:'NEO', value:'NEO', checked:false},
    {name:'Waves', value:'Waves', checked:false},
    {name:'Steemit', value:'Steemit', checked:false},
    {name:'Lisk', value:'Lisk', checked:false},
    {name:'Quantum', value:'Quantum', checked:false},
    {name:'Tezos', value:'Tezos', checked:false},
    {name:'Cardano', value:'Cardano', checked:false},
    {name:'Litecoin', value:'Litecoin', checked:false},
    {name:'Monero', value:'Monero', checked:false},
    {name:'ZCash', value:'ZCash', checked:false},
    {name:'IOTA', value:'IOTA', checked:false},
    {name:'NEM', value:'NEM', checked:false},
    {name:'NXT', value:'NXT', checked:false},
    {name:'Dash', value:'Dash', checked:false},
    {name:'Doge', value:'Doge', checked:false},
  ]
};
