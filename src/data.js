import { img } from "framer-motion/client"

// About
const logo = '/AboutSection/rhema-logo.png'
const cross = '/AboutSection/cross.jpg'
const thepastor = '/AboutSection/thepastor.jpg'
const ourdepartments = '/AboutSection/ourdepartments.jpg'
const ourteachings = '/AboutSection/ourteachings.jpg'
const ourministers = '/AboutSection/rev_georgeadegboye.jpg'

const aboutSideBarData = [
    {
        title: 'Our Values',
        image: cross,
        link: '/ourvalues'
    },
    {
        title: 'Our Services',
        image: thepastor,
        link: '/services'
    },
    {
        title: 'Our Departments',
        image: ourdepartments,
        link: '/departments'  
    },
    //     {
        //     title: 'Our History',
        //     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem voluptas quidem corporis, reiciendis esse non ullam porro soluta ratione amet sapiente magnam quos quam cumque fuga doloribus harum placeat quae? Sint, deserunt quam vel aspernatur libero, quisquam commodi nostrum quo facere dolorem porro, a sunt quae quos hic? Quia, nostrum.',
        //     image: logo,
        //     link: '/history'
        // },
        {
            title: 'Our Teachings',
            image: ourteachings,
            link: '/teachings'
        },
        {
        title: 'Our Ministers',
        image: ourministers,
        link: '/ministers'
    },
    
]



// Services
// Celebration Images
// Normal
const members = '/ServiceImages/Celebration/normal/members.jpg'
const teaching = '/ServiceImages/Celebration/normal/teaching.jpg'
const usherNormal = '/ServiceImages/Celebration/normal/usher.jpg'
const worship = '/ServiceImages/Celebration/normal/worship.jpg'

// Holy Ghost
const layinghands = '/ServiceImages/Celebration/holyghost/layinghands.jpg'
const ministering = '/ServiceImages/Celebration/holyghost/ministering.jpg'
const prayer = '/ServiceImages/Celebration/holyghost/prayer.jpg'
const singing = '/ServiceImages/Celebration/holyghost/singing.jpg'
const tears = '/ServiceImages/Celebration/holyghost/tears.jpg'
const usherHolyGhost = '/ServiceImages/Celebration/holyghost/usher.jpg'

// Communion
const elements = '/ServiceImages/Celebration/communion/elements.jpg'
const ministeringCommunion = '/ServiceImages/Celebration/communion/ministering.jpg'
const servingCommunion = '/ServiceImages/Celebration/communion/serving.jpg'
const singingCommunion = '/ServiceImages/Celebration/communion/singing.jpg'

// Thanksgiving
const dance = '/ServiceImages/Celebration/thanksgiving/dance.jpg'
const praise = '/ServiceImages/Celebration/thanksgiving/praise.jpg'
const teachingThanksgiving = '/ServiceImages/Celebration/thanksgiving/teaching.jpg'
const usherThanksgiving = '/ServiceImages/Celebration/thanksgiving/usher.jpg'
const word = '/ServiceImages/Celebration/thanksgiving/word.jpg'
const worshipThanksgiving = '/ServiceImages/Celebration/thanksgiving/worship.jpg'

const normalImages = [usherNormal, worship, teaching, members ]
const holyGhostImages = [layinghands, ministering, prayer, singing, tears, usherHolyGhost]
const communionImages = [elements, ministeringCommunion, servingCommunion, singingCommunion]
const thanksgivingImages = [dance, praise, teachingThanksgiving, usherThanksgiving, worshipThanksgiving, word]

//Wednesday Images
const membersWednesday = '/ServiceImages/Wednesday/Teaching/members.jpg'
const wednesdayTeaching = '/ServiceImages/Wednesday/Teaching/teaching.jpg'
const wednesdayUsher = '/ServiceImages/Wednesday/Teaching/usher.jpg'

const class1 = '/ServiceImages/Wednesday/InteractiveBibleStudy/class-1.jpg'
const class2 = '/ServiceImages/Wednesday/InteractiveBibleStudy/class-2.jpg'
const class3 = '/ServiceImages/Wednesday/InteractiveBibleStudy/class-3.jpg'
const facilitator = '/ServiceImages/Wednesday/InteractiveBibleStudy/facilitator.jpg'
const questions = '/ServiceImages/Wednesday/InteractiveBibleStudy/questions.jpg'
const questions2 = '/ServiceImages/Wednesday/InteractiveBibleStudy/questions2.jpg'

const wednesdayTeachingImages = [wednesdayUsher, membersWednesday, wednesdayTeaching]
const wednesdayInteractiveImages = [class1, class2, class3, facilitator, questions, questions2]

//Prayer Images
const prayer1 = '/ServiceImages/Prayer/prayerService.jpg'
const prayer2 = '/ServiceImages/Prayer/allnightprayers.jpg'

const prayerFlyer = [prayer1]
const allNightPrayerFlyer = [prayer2]

const servicesData = [
    {
        name: 'Celebration Service',
        weekDay: 'Every Sunday',
        types: [
            {
                name: 'Regular Service',
                specific: 'Every Sunday',
                value: 'regular',
                images: normalImages,
                description: 'Join us every Sunday for a powerful time of worship, the Word, and fellowship. Our Sunday services are filled with vibrant praise, life-transforming teachings, and the warm presence of God. It’s a time to be refreshed and encouraged for the week ahead.',
                time: '8:00AM - 11:00AM'
            },
            {
                name: 'Thanksgiving 🎉',
                specific: 'Last Sunday of every month',
                value: 'thanksgiving',
                images: thanksgivingImages,
                description: "Every last Sunday of the month is dedicated to giving thanks to God for His faithfulness. As a church family, we come together to celebrate victories, birthdays, anniversaries, and the goodness of God in our lives. It's a joyful, vibrant, and colorful service full of praise and gratitude",
                time: '8:00AM - 11:00AM'
            },
            {
                name: 'Holy Ghost 🔥',
                specific: 'Every 1st Sunday, Bi-monthly',
                value: 'holyghost',
                images: holyGhostImages,
                description: 'On the first Sunday of every two months, we gather for a special Holy Ghost Service — a time where we earnestly expect and experience the supernatural move of God. Come ready for miracles, impartation, and deep encounters with the Holy Spirit.',
                time: '8:00AM - as the Spirit leads'
            },
            {
                name: 'Holy Communion 🍞',
                specific: 'Every 1st Sunday, Bi-monthly',
                value: 'communion',
                images: communionImages,
                description: 'Also held on the first Sunday of every two months, our Communion Service is a sacred time where we come together to remember and honor the sacrifice of Jesus Christ. In obedience to His command, we break bread and partake of the communion table in unity and reverence.',
                time: '8:00AM - 11:00AM'
            }
        ]
    },
    {
        name: 'Wednesday Teaching Service',
        weekDay: 'Every Wednesday',
        types: [
            {
                name: 'Teaching Service',
                specific: 'Every Wednesday',
                value: 'teaching',
                images: wednesdayTeachingImages,
                description: 'Every Wednesday, Pastor Judah leads us in deep, insightful teachings centered on a monthly theme. These sessions are designed to build spiritual maturity, strengthen your faith, and provide practical biblical wisdom for everyday living.',
                time: '5:30PM - 7:00PM'
            },
            {
                name: 'Interactive Bible Study',
                specific: 'Every Wednesday in May and October',
                value: 'interactive',
                images: wednesdayInteractiveImages,
                description: 'Our Interactive Bible Study offers a unique and engaging way to grow in the Word. The church is divided into small groups or classes, each guided by a trained facilitator. Together, we explore Scripture, ask questions, and learn from one another in a supportive and interactive environment.',
                time: '5:30PM - 7:00PM'
            }
        ]
    },
    {
        name: 'Prayer Service',
        weekDay: 'Every Friday',
        types: [
            {
                name: 'Prayer Service',
                specific: 'Every Friday',
                value: 'prayer',
                images: prayerFlyer,
                description: 'Join us every Friday for a powerful session of focused prayers. It’s a time to align with God’s will, intercede for our lives and nation, and push through in the place of prayer.',
                time: '5:30PM - 7:00PM'
            },
            {
                name: 'All Night Prayers',
                specific: 'Last Friday of every month',
                value: 'allnight',
                images: allNightPrayerFlyer,
                description: 'Every last Friday of the month, we gather from 10pm till dawn for a night of intense, Spirit-led prayers. These all-night meetings are times of spiritual refreshing, breakthrough, and alignment with God’s purpose. Come expectant for a divine encounter.',
                time: '10:00PM - 4:00AM'
            }
        ]
    }
]

//DEPARTMENTS
const ushering = '/departmentsImages/ushering.jpg'
const children = '/departmentsImages/children.jpg'
const media = '/departmentsImages/media.jpg'
const rmc = '/departmentsImages/rmc.jpg'
const sanctuary = '/departmentsImages/sanctuary.jpg'
const technical = '/departmentsImages/technical.jpg'
const intercessory = '/departmentsImages/intercessory.jpg'
const welfare = '/departmentsImages/welfare.jpg'
const pru = '/HomeBackgroundImages/ten.jpg'

const departmentData = [
    {
        name: 'Children',
        img: children
    },
    {
        name: 'Choir',
        img: rmc
    },
    {
        name: 'Media',
        img: media
    },
    {
        name: 'Intercessory',
        img: intercessory
    },
    {
        name: 'Public Relations Unit',
        img: pru
    },
    {
        name: 'Sanctuary',
        img: sanctuary 
    },
    {
        name: 'Technical',
        img: technical
    },
    {
        name: 'Ushering',
        img: ushering
    },
    {
        name: 'Welfare',
        img: welfare
    },
    {
        name: 'Protocol',
        // img: welfare
    },
    {
        name: 'GAWO',
        // img: welfare
    },
    {
        name: 'Follow-Up',
        // img: welfare
    },
]

// MONTHS
const february = '/monthlyImages/february.jpg'
const march = '/monthlyImages/march.jpg'
const april = '/monthlyImages/april.jpg'
const june = '/monthlyImages/june.jpg'
const july = '/monthlyImages/july.jpg'
const august = '/monthlyImages/august.jpg'
const october = '/monthlyImages/october.jpg'
const september = '/monthlyImages/september.jpg'
const november = '/monthlyImages/november.jpg'
const december = '/monthlyImages/december.jpg'

const months = [
    {
        month: 'February',
        img: february
    },
    {
        month: 'March',
        img: march
    },
    {
        month: 'April',
        img: april
    },
    {
        month: 'June',
        img: june
    },
    {
        month: 'July',
        img: july
    },
    {
        month: 'August',
        img: august
    },
    {
        month: 'October',
        img: october
    },
    {
        month: 'November',
        img: november
    },
    {
        month: 'December',
        img: december
    },
]

const ourValues = [
  {
    value: "The Word of God",
    description: "We uphold the Bible as the final authority in all matters of faith and conduct. God's Word is our guide and foundation.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    scripture: "2 Timothy 3:16-17",
    kjv_verse: "All scripture is given by inspiration of God, and is profitable for doctrine, for reproof, for correction, for instruction in righteousness: That the man of God may be perfect, thoroughly furnished unto all good works.",
    icon: "📖"
  },
  {
    value: "Prayer",
    description: "We believe in the power of fervent, consistent prayer as a means of communion with God and a key to spiritual growth and victory.",
    image: "https://images.unsplash.com/photo-1518131678673-6f7f5c3d1fd7",
    scripture: "James 5:16",
    kjv_verse: "The effectual fervent prayer of a righteous man availeth much.",
    icon: "🙏"
  },
  {
    value: "Family Values",
    description: "We promote godly family structures, honoring marriage, parenting, and relationships rooted in love, respect, and biblical principles.",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf",
    scripture: "Joshua 24:15",
    kjv_verse: "And if it seem evil unto you to serve the LORD, choose you this day whom ye will serve... but as for me and my house, we will serve the LORD.",
    icon: "👨‍👩‍👧‍👦"
  },
  {
    value: "Biblical Teachings",
    description: "We are committed to sound doctrine and faithful teaching of the Bible, equipping believers to live Christ-centered lives.",
    image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d",
    scripture: "Titus 2:1",
    kjv_verse: "But speak thou the things which become sound doctrine:",
    icon: "📚"
  },
  {
    value: "Spiritual Manifestations",
    description: "We embrace the move of the Holy Spirit as demonstrated in the book of Acts — including healing, prophecy, and the gifts of the Spirit.",
    image: "https://images.unsplash.com/photo-1605086202344-3b78d1e7f0eb",
    scripture: "Acts 2:17-18",
    kjv_verse: "And it shall come to pass in the last days, saith God, I will pour out of my Spirit upon all flesh... and they shall prophesy.",
    icon: "🔥"
  },
  {
    value: "Excellence",
    description: "We serve and represent God with a spirit of excellence — in worship, leadership, service, and stewardship.",
    image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312",
    scripture: "Daniel 6:3",
    kjv_verse: "Then this Daniel was preferred above the presidents and princes, because an excellent spirit was in him; and the king thought to set him over the whole realm.",
    icon: "🏅"
  }
]

// MINISTER PICTURES

const revGeorgeAdegboye = ['/MinistersPics/rev_georgeadegboye.jpg'] 

const pastorJudah = ['/MinistersPics/pj_2.jpg', '/MinistersPics/pj_1.jpg','/MinistersPics/pj_3.jpg','/MinistersPics/pj_4.jpg','/MinistersPics/pj_5.jpg','/MinistersPics/pj_6.jpg', '/MinistersPics/pj_7.jpg'] 
const ministerAdedamola = ['/MinistersPics/md_5.jpg','/MinistersPics/md_2.jpg','/MinistersPics/md_3.jpg','/MinistersPics/md_4.jpg',] 
const ministerSamuel = ['/MinistersPics/ms_1.jpg', '/MinistersPics/ms_2.jpg','/MinistersPics/ms_3.jpg','/MinistersPics/ms_4.jpg','/MinistersPics/ms_5.jpg','/MinistersPics/ms_6.jpg','/MinistersPics/ms_7.jpg','/MinistersPics/ms_8.jpg','/MinistersPics/ms_9.jpg', '/MinistersPics/ms_10.jpg'] 
const ministerEsther = ['/MinistersPics/me_1.jpg', '/MinistersPics/me_2.jpg','/MinistersPics/me_3.jpg','/MinistersPics/me_4.jpg'] 


const ministersData = [
    {
  name: "Rev. George Adegboye",
  role: "President and Founder of Rhema Chapel International Churches; President of Ever Increasing Word Ministries",
  spouse: "Rev. Oloruntoyin Modupeola Adegboye",
  children: "Faith, Faithful and Faithfulness",
  dob: "7th of December, 1958",
  nationality: "Nigerian",
  education: "Bachelor's and Master's degrees in Sociology from the University of Ibadan",
  email: "",
  socialMedia: {
    facebook: "",
    instagram: "",
    twitter: "",
    telegram: "",
    youtube: ""
  },
  photoUrl: revGeorgeAdegboye,
  biography: "Rev. George Olawale Adegboye, born on December 7, 1958, in Offa, Kwara State, Nigeria, is a renowned Nigerian preacher and mentor. He is the President and Founder of Rhema Chapel International Churches and Ever Increasing Word Ministries. Known for his profound ability to quote scriptures extensively, he is often referred to as the 'Walking Bible'. Rev. Adegboye holds both Bachelor's and Master's degrees in Sociology from the University of Ibadan. Before venturing into full-time ministry, he served as a lecturer at Kwara State Polytechnic. His ministry has been instrumental in mentoring several prominent pastors in Nigeria. He is married to Rev. Oloruntoyin Modupeola Adegboye, and they are blessed with three children: Faith, Faithful, and Faithfulness.",
  "ministryFocus": ["Apostolic", "Teaching", "Counseling"]
},
{
  name: "Rev. Oloruntoyin Adegboye",
  role: "Vice President, Rhema Chapel International Churches; Director, Word of Victory Bible Training Institute",
  spouse: "Rev. George Adegboye",
  children: "Faith, Faithful and Faithfulness",
  dob: "",
  nationality: "British",
  education: "",
  contact: {
    email: ""
  },
  socialMedia: {
    facebook: "",
    instagram: "",
    twitter: "",
    telegram: "",
    youtube: ""
  },
  photoUrl: ["ourministers", "ourministers", "ourministers"],
  biography: "Rev. Oloruntoyin Modupeola Adegboye, affectionately known as 'Faith Mummy', is the Vice President of Rhema Chapel International Churches and the Director of the Word of Victory Bible Training Institute. A British national, she chose to settle in Ilorin, Nigeria, to support her husband, Rev. George Adegboye, in his ministry. Preferring a behind-the-scenes role, she oversees the Children’s Ministry, including its daycare, primary, and secondary schools, and coordinates the Bible School. Known for her elegance and soft-spoken nature, she provides unwavering support to her husband and the church community. She met Rev. George in 1981 in Ilesha, and they married in 1984. Together, they have three children: Faith, Faithful, and Faithfulness.",
  ministryFocus: ["Children's Ministry", "Education", "Leadership Support"]
},
{
  name: "Pastor Judah Olorunmaiye",
  role: "Senior Pastor, Rhema Chapel International Churches, Ogbomoso",
  spouse: "Minister Adedamola Olorunmaiye",
  children: "Perez Olorumaiye and Zarah Olorunmaiye",
  dob: "13th of December,",
  nationality: "Nigerian",
  education: "University of Ilorin, Kwara State",
  contact: {
    email: "judaholorunmaiye@gmail.com"
  },
  socialMedia: {
    facebook: "https://www.facebook.com/judah.olorunmaiye",
    instagram: "https://www.instagram.com/judahmaiye",
    twitter: "https://twitter.com/JudahMaiye",
    telegram: "https://t.me/judahmaiye",
    youtube: "https://www.youtube.com/@JudahOlorunmaiye"
  },
  photoUrl: pastorJudah,
  biography: "Pastor Judah Olorunmaiye, affectionately known as 'PJ', is the Senior Pastor of Rhema Chapel International Churches in Ogbomoso, Nigeria. Born on December 13, he is a passionate teacher of the Word with a divine mandate to compel consecration, provoke repentance, and inspire worship through the teaching and preaching of God's Word, accompanied by miraculous demonstrations of His power. Pastor Judah holds a degree from the University of Ilorin, Kwara State. He is also an author, with his notable work titled 'Candid Opinions from an Oracle'. In addition to his pastoral duties, he is a musician, having released 'Doctrine in Melodies'. Pastor Judah is married, and together with his wife, they are blessed with two children. They reside in Ogbomoso, Oyo State, where they are committed to raising the banner of the Lord Jesus Christ.",
  ministryFocus: ["Teaching", "Worship", "Youth Ministry", "Consecration", "Repentance"]
},
{
  name: "Minister Adedamola Olorunmaiye",
  role: "Minister Rhema Chapel International Churches, Ogbomoso",
  spouse:  "Pastor Judah Olorunmaiye",
  contact: {
    email: "adedamolaolorunmaiye@gmail.com"
  },
  dob: "December 11",
  nationality: "Nigerian",
  education: "University of Ilorin, Kwara State",
  socialMedia: {
    instagram: "https://www.instagram.com/adedamolatemi/",
    facebook: "",
    twitter: "",
    youtube: "",
    telegram: ""
  },
  photoUrl: ministerAdedamola,
  children:  "Perez Olorunmaiye and Zarah Olorunmaiye",
  biography: `Minister Adedamola Olorunmaiye serves alongside her husband, Pastor Judah Olorunmaiye, at Rhema Chapel International Churches, Ogbomoso. As a full-time homemaker who also runs a business, she balances managing the Olorunmaiye household with entrepreneurial responsibilities. She is known for her warm hospitality, cheerful spirit, and welcoming presence. Together, they parent their two children, Perez and Zarah.`
},
{
  name: "Minister Samuel Kosoko",
  role: "Minister & Musician, Rhema Chapel International Churches, Ogbomoso",
  nationality: "Nigerian",
  spouse: "Minister Esther Kosoko",
  education: "University of Ilorin, Kwara State",
  children: "",
  dob: "7th of August",
  socialMedia: {
    instagram: "https://www.instagram.com/samkosoko/",
    facebook: "",
    twitter: "",
    youtube: "",
    telegram: "https://t.me/samkosoko"
  },
  photoUrl: ministerSamuel,
  biography: `Minister Samuel Kosoko serves faithfully at Rhema Chapel International Churches in Ogbomoso. Born on August, he is not only a dedicated and qualified minister but also a gifted worship leader and multi-instrumentalist proficient in the drums, guitar, and keyboard. Known for his ability to minister deeply through music, Samuel brings a rare blend of spiritual depth and musical excellence to every gathering. He is also recognized for his sharp business insight, which informs his teaching and leadership—though he is not an entrepreneur by profession. He is the visionary host of "In-House Worship with Sam," a monthly worship gathering that creates intimate spaces for God's presence. He also convenes "River of Joy," an annual worship and praise meeting that draws believers into heartfelt expressions of gratitude and celebration. Minister Samuel is married to Minister Esther Kosoko, a compassionate medical doctor and fellow minister of the gospel. Together, they serve their community and engage the faith family through Rhema Chapel Ogbomoso and other platforms`
},
{
  name: "Minister Esther Kosoko",
  role: "Minister, Rhema Chapel International Churches, Ogbomoso",
  spouse: "Minister Samuel Kosoko",
  dob: "5th of June",
  education: "Bowen University",
  children: "",
  contact: {
    email: "estherkosoko@gmail.com"
  },
  photoUrl: ministerEsther,
  socialMedia: {
    instagram: "https://www.instagram.com/estamabs/",
    facebook: "",   
    twitter: "",    
    youtube: "",    
    telegram: ""
  },
  biography: `Minister Esther Kosoko, born June 5 into the Mabinuori family—a longstanding Rhema Chapel household—serves both God and people through her dual calling. A pediatrician with an MBBS from Bowen University, she blends medical excellence with genuine spiritual warmth. Married to Minister Samuel Kosoko, she supports his ministry and is deeply involved in her own expressions of compassion and faith. With a gentle, cheerful soul, Minister Esther loves God dearly and radiates compassion in her medical practice and ministry.`
}
]


export {servicesData, aboutSideBarData, departmentData, months, ourValues, ministersData }

