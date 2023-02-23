module.exports = role => ([
    // name
    {
        type: "input",
        name: "name",
        message: `${role} name : `,
    },
    //id,
    {
        type: "input",
        name: "id",
        message: `${role} employee id : `,
    },
    //emails
    {
        type: "input",
        name: "email",
        message: `${role} email address : `,
    },
]);
