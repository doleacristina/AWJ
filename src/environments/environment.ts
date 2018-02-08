// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  Users: [{
    Name: "Cristina",
    Surname: "Dolea",
    Email: "cr@gmail.com",
    ID: "333AA",
    Username: "cristina",
    Password: "cristina",
    Attendance: []
  }],
  Laboratories: [{
        "Name": "AWJ",
        "Dates": [{
          "Day": "Monday",
          "Hour": 1300
        },
        {
          "Day": "Friday",
          "Hour": 1800
        }],
        "Groups": ["322AB", "322AC"],
        "Id": "111"
    }, 
    {
        "Name": "BD",
        "Dates": [
                    {
                        "Day": "Monday",
                        "Hour": 1100
                    },
                    {
                        "Day": "Friday",
                        "Hour": 1000
                    }
        ],
        "Groups": ["322AA"],
        "Id": "112"
    }
],
Courses: [
    {
        "Name": "AWJ",
        "Dates": [
                    {
                        "Day": "Monday",
                        "Hour": 1300
                    },
                    {
                        "Day": "Friday",
                        "Hour": 1800
                    }
        ],
        "Groups": ["322AB", "322AC"],
        "Id": "113"
    }, 
    {
        "Name": "BD",
        "Dates": [
                    {
                        "Day": "Sunday",
                        "Hour": 1300
                    },
                    {
                        "Day": "Friday",
                        "Hour": 1000
                    }
        ],
        "Groups": ["333AA"],
        "Id": "114"
    }
] 
};
