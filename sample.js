use("First_DB");

db.createCollection("sample");

db.sample.insertOne({
    name: "Ravi",
    age: 21
});

db.sample.insertMany([
    {
        name: "Vasanth",
        age: 25
    },
    {
        name: "Vasanth",
        age: 25,
        phone: 25479896
    }
]);

db.students.insertMany([
    {
        rollNo: 101,
        name: "Vasanth",
        age: 21,
        department: "CSE",
        marks: 85,
        skills: ["Java", "Python", "MongoDB"],
        address: {
            city: "Chennai",
            state: "Tamil Nadu"
        },
        scholarship: true
    },

    {
        rollNo: 102,
        name: "Rahul",
        age: 22,
        department: "ECE",
        marks: 72,
        skills: ["C", "Python", "Arduino"],
        address: {
            city: "Bangalore",
            state: "Karnataka"
        },
        scholarship: false
    }

    // Add the remaining student documents here
]);
