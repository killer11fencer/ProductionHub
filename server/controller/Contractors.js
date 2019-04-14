let id = 1
let contractors = [ {
    id: id++,
    name: 'Jonathan',
    company: 'Canasian',
    special:'Phantom',
    experience: '13 years',
    skills: ['DP', 'Editor', 'Director'],
    rate: '$500 a day',
    phone: '805-345-4123',
    email: 'canasian@gmail.com',
    video: 'http://vimeo.com/281718664',
    city: 'Draper'
},
{
    id: id++,
    name: 'Jorge',
    company: 'Jet',
    special:'Animation',
    experience: '6 years',
    skills: ['DP', 'Animator', 'Director'],
    rate: '$500 a day',
    phone: '804-345-4123',
    video:'http://youtu.be/Eb7KR6_-Eog',
    email: 'gggggcanasian@gmail.com',
    city: 'Springville'
},
{
    id: id++,
    name: 'Jenn',
    company: 'Good',
    special:'scriptdoctor',
    experience: '6 years',
    skills: ['Writer','actor'],
    rate: '$500 a day',
    phone: '806-345-4123',
    video: 'http://youtu.be/EDrntP3j6Vo',
    email: 'Jenn@gmail.com',
    city: 'Calgary'
}
]

module.exports = {
    get: (req, res) => {
        res.send(contractors)
    },
    create: (req,res) => {
        let newContractor = req.body 
      newContractor.id = id++
      
      contractors.push(newContractor)
      res.send(contractors)
    },
    delete: (req,res) => {
        let {id} = req.params
        let index = contractors.findIndex(c=>+c.id === +id) 
            contractors.splice(index,1)
        
        res.send(contractors)
    },
    update: (req,res) => {
        let {id} = req.params
        let updatedContact = req.body
        updatedContact.id = +id
        let index = contractors.findIndex(c=>+c.id === +id)
        contractors.splice(index,1,updatedContact)
        res.send(contractors)

    }
}