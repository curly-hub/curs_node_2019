const crypto = require('crypto');

const randomGeneration = {
    generateData: function(numberEmployees, numberEquipmentPerEmployee) {
        let data = {
                employees: [],
                equipments: [],
                users: []
        }
        let firstName =  ["Adam", "Alex", "Aaron", "Ben", "Carl", "Dan", "David", "Edward", "Fred", "Frank", "George", "Hal", "Hank", "Ike", "John", "Jack", "Joe", "Larry", "Monte", "Matthew", "Mark", "Nathan", "Otto", "Paul", "Peter", "Roger", "Roger", "Steve", "Thomas", "Tim", "Ty", "Victor", "Walter"];	
        let lastName = [ "Anderson", "Ashwoon", "Aikin", "Bateman", "Bongard", "Bowers", "Boyd", "Cannon", "Cast", "Deitz", "Dewalt", "Ebner", "Frick", "Hancock", "Haworth", "Hesch", "Hoffman", "Kassing", "Knutson", "Lawless", "Lawicki", "Mccord", "McCormack", "Miller", "Myers", "Nugent", "Ortiz", "Orwig", "Ory", "Paiser", "Pak", "Pettigrew", "Quinn", "Quizoz", "Ramachandran", "Resnick", "Sagar", "Schickowski", "Schiebel", "Sellon", "Severson", "Shaffer", "Solberg", "Soloman", "Sonderling", "Soukup", "Soulis", "Stahl", "Sweeney", "Tandy", "Trebil", "Trusela", "Trussel", "Turco", "Uddin", "Uflan", "Ulrich", "Upson", "Vader", "Vail", "Valente", "Van Zandt", "Vanderpoel", "Ventotla", "Vogal", "Wagle", "Wagner", "Wakefield", "Weinstein", "Weiss", "Woo", "Yang", "Yates", "Yocum", "Zeaser", "Zeller", "Ziegler", "Bauer", "Baxster", "Casal", "Cataldi", "Caswell", "Celedon", "Chambers", "Chapman", "Christensen", "Darnell", "Davidson", "Davis", "DeLorenzo", "Dinkins", "Doran", "Dugelman", "Dugan", "Duffman", "Eastman", "Ferro", "Ferry", "Fletcher", "Fietzer", "Hylan", "Hydinger", "Illingsworth", "Ingram", "Irwin", "Jagtap", "Jenson", "Johnson", "Johnsen", "Jones", "Jurgenson", "Kalleg", "Kaskel", "Keller", "Leisinger", "LePage", "Lewis", "Linde", "Lulloff", "Maki", "Martin", "McGinnis", "Mills", "Moody", "Moore", "Napier", "Nelson", "Norquist", "Nuttle", "Olson", "Ostrander", "Reamer", "Reardon", "Reyes", "Rice", "Ripka", "Roberts", "Rogers", "Root", "Sandstrom", "Sawyer", "Schlicht", "Schmitt", "Schwager", "Schutz", "Schuster", "Tapia", "Thompson", "Tiernan", "Tisler" ];
        let firstNameIndex = 0;
        let lastNameIndex = 0;
        let usedUsernames = [];
        for(let i=0; i < numberEmployees; i++) {
            firstNameIndex = Math.floor(Math.random() * firstName.length);
            lastNameIndex = Math.floor(Math.random() * lastName.length);
            let fn = firstName[firstNameIndex];
            let ln = lastName[lastNameIndex];
            if(usedUsernames.includes(fn+"."+ln)) {
                i--;
                continue;
            }
            data.users.push(this.generateUser(fn,ln,i+1));
            usedUsernames.push(fn+"."+ln);
            data.employees.push(          
                {
                id: i+1,
                firstName: fn,
                lastName: ln,
                department: 'test',
                hireDate: '2019-11-09 01:02:43.115 +00:00',
                position: 'pro',
                location: 'Buc',
                managerId: null,
                createdAt: '2019-11-09 01:02:43.115 +00:00',
                updatedAt: '2019-11-09 01:02:43.115 +00:00'
              }
            )
            data.equipments = data.equipments.concat(this.generateEquipments(numberEquipmentPerEmployee, i+1));
        }
        return data;
    },
    generateEquipments: function(number,employeeId) {
        let equipments = [];
        let types = ['laptop', 'pc', 'headset', 'mouse', 'keyboard'];
        let models = ['hp', 'lenovo', 'dell', 'razer', 'microsoft'];
        for(let i=0; i < number; i++) {
            equipments.push(
            {
                name: types[Math.floor(Math.random() * types.length)],
                serial: 'AAAAAAAAAAAAAAAAAAAAAA',
                type: types[Math.floor(Math.random() * types.length)],
                model: models[Math.floor(Math.random() * models.length)],
                employeeId: employeeId,
                createdAt: '2019-11-09 01:02:43.115 +00:00',
                updatedAt: '2019-11-09 01:02:43.115 +00:00'
            });
        }
        return equipments;
    },
    generateUser: function(fn,ln,id) {
        let user = {
            userName: fn+"."+ln,
            password: crypto.createHash('sha1').update('A').digest('base64'),
            email: fn+"."+ln+'@test.com',
            employeeId: id,
            createdAt: '2019-11-09 01:02:43.115 +00:00',
            updatedAt: '2019-11-09 01:02:43.115 +00:00'
        };
        return user;
    }
}

module.exports = randomGeneration;