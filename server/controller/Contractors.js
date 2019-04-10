let id = 1
let contractors = [{
    id: id++,
    name: 'Jonathan',
    company: 'Canasian',
    experience: '13 years',
    skills: ['DP', 'Editor', 'Director'],
    rate: '$500 a day',
    phone: '805-345-4123',
    email: 'canasian@gmail.com',
    city: 'Draper'
},
{
    id: id++,
    name: 'Jorge',
    company: 'Jet',
    experience: '6 years',
    skills: ['DP', 'Animator', 'Director'],
    rate: '$500 a day',
    phone: '804-345-4123',
    email: 'canasian@gmail.com',
    city: 'Springville'
},
{
    id: id++,
    name: 'Jenn',
    company: 'Good',
    experience: '6 years',
    skills: ['Writer','actor'],
    rate: '$500 a day',
    phone: '806-345-4123',
    email: 'Jenn@gmail.com',
    city: 'Calgary'
}
]

modules.exports = {
    get: (req, res) => {
        res.send(contractors)
    },
    create: (req,res) => {
        let newContractor = req.body 
      newContractor.id = id++
      
      contractors.push(contractor)
      res.send(contractors)
    }
}