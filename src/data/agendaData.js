export const CATEGORY_CONSTANTS = {
  TRAVEL_REGISTRATION: "Travel and Registration",
  MAIN_CONFERENCE: "PegaWORLD main conference",
  OTHER: "Other",
  BREAKS_MEALS: "Breaks and Meals",
  CUSTOMER_CENTRICITY: "Customer Centricity",
  USER_CENTERED_DESIGN: "User Centered Design",
  MOBILE: "Mobile"
};

const agendaData = [
  {
    "day": "Sunday",
    "date": "June 4th",
    "events": [
      {
        "time": "by 12:00",
        "title": "Check-in & Registration",
        "location": "Marriot Orlando",
        "category": CATEGORY_CONSTANTS.TRAVEL_REGISTRATION,
        "category_title": "Registration"
      },
      {
        "time": "13:00-13:30",
        "title": "Opening Remarks",
        "location": "Crystal J1",
        "category": CATEGORY_CONSTANTS.MAIN_CONFERENCE,
        "category_title": "PegaWORLD Main Conference"
      },
      {
        "time": "13:30-15:00",
        "title": "Strategic Applications and Competitive Intelligence",
        "location": "Crystal J1",
        "category": CATEGORY_CONSTANTS.OTHER,
        "category_title": null
      },
      {
        "time": "15:00-15:30",
        "title": "Break",
        "category": CATEGORY_CONSTANTS.BREAKS_MEALS,
        "category_title": "Break"
      },
      {
        "time": "15:30-16:30",
        "title": "Customer Panel",
        "location": "Crystal J1",
        "category": CATEGORY_CONSTANTS.CUSTOMER_CENTRICITY,
        "category_title": "Customer Centricity & Consulting"
      },
      {
        "time": "16:30-17:15",
        "title": "Key Messages",
        "location": "Crystal J1",
        "category": CATEGORY_CONSTANTS.CUSTOMER_CENTRICITY,
        "category_title": "Customer Centricity & Consulting"
      },
      {
        "time": "17:15-17:45",
        "title": "Don't Blow it!",
        "location": "Crystal J1",
        "category": CATEGORY_CONSTANTS.CUSTOMER_CENTRICITY,
        "category_title": "Customer Experience"
      },
      {
        "time": "18:30",
        "title": "PegaWORLD Reception & Dinner",
        "category": CATEGORY_CONSTANTS.BREAKS_MEALS,
        "category_title": "Meal"
      }
    ]
  },
  {
    "day": "Monday",
    "date": "June 5th",
    "events": [
      {
        "time": "08:00",
        "title": "PegaWORLD",
        "category": CATEGORY_CONSTANTS.MAIN_CONFERENCE,
        "category_title": "PegaWORLD Main Conference"
      },
      {
        "time": "18:00",
        "title": "Customer Appreciation",
        "location": "Universal Studios, Orlando",
        "category": CATEGORY_CONSTANTS.CUSTOMER_CENTRICITY,
        "category_title": "Customer Centricity"
      }
    ]
  },
  {
    "day": "Tuesday",
    "date": "June 6th",
    "events": [
      {
        "time": "08:00",
        "title": "PegaWORLD",
        "category": CATEGORY_CONSTANTS.MAIN_CONFERENCE,
        "category_title": "PegaWORLD Main Conference"
      },
      {
        "time": "18:00",
        "title": "Design Track Event - Kayak Eco-Tour",
        "location": "Shingle Creek",
        "category": CATEGORY_CONSTANTS.OTHER,
        "category_title": null
      }
    ]
  },
  {
    "day": "Wednesday",
    "date": "June 7th",
    "events": [
      {
        "time": "07:00-08:00",
        "title": "Breakfast",
        "category": CATEGORY_CONSTANTS.BREAKS_MEALS,
        "category_title": "Meal",
        "track": ["mobile", "user_centered_design"]
      },
      {
        "time": "08:15-08:45",
        "title": "Overview",
        "location": "Crystal L",
        "category": CATEGORY_CONSTANTS.USER_CENTERED_DESIGN,
        "category_title": "User Centered Design",
        "track": "user_centered_design"
      },
      {
        "time": "08:15-08:45",
        "title": "Overview",
        "location": "Crystal K",
        "category": CATEGORY_CONSTANTS.MOBILE,
        "category_title": "Mobile",
        "track": "mobile"
      },
      {
        "time": "08:45-09:15",
        "title": "Overview",
        "location": "Crystal K",
        "category": CATEGORY_CONSTANTS.USER_CENTERED_DESIGN,
        "category_title": "User Centered Design",
        "track": "user_centered_design"
      },
      {
        "time": "08:45-09:15",
        "title": "Overview",
        "location": "Crystal L",
        "category": CATEGORY_CONSTANTS.MOBILE,
        "category_title": "Mobile",
        "track": "mobile"
      },
      {
        "time": "09:15-10:35",
        "title": "Implementations",
        "location": "Crystal K",
        "category": CATEGORY_CONSTANTS.USER_CENTERED_DESIGN,
        "category_title": "User Centered Design",
        "track": "user_centered_design"
      },
      {
        "time": "09:15-10:45",
        "title": "It's all about the User Experience",
        "location": "Crystal L",
        "category": CATEGORY_CONSTANTS.MOBILE,
        "category_title": "Mobile",
        "track": "mobile"
      },
      {
        "time": "10:35-10:50",
        "title": "Break",
        "category": CATEGORY_CONSTANTS.BREAKS_MEALS,
        "category_title": "User Centered Design Track",
        "track": "user_centered_design"
      },
      {
        "time": "10:45-11:00",
        "title": "Break",
        "category": CATEGORY_CONSTANTS.BREAKS_MEALS,
        "category_title": "Mobile Track",
        "track": "mobile"
      },
      {
        "time": "10:50-12:20",
        "title": "Nuts and Bolts",
        "location": "Crystal K",
        "category": CATEGORY_CONSTANTS.USER_CENTERED_DESIGN,
        "category_title": "User Centered Design",
        "track": "user_centered_design"
      },
      {
        "time": "11:00-12:20",
        "title": "Publishing an App & Offline Considerations",
        "location": "Crystal L",
        "category": CATEGORY_CONSTANTS.MOBILE,
        "category_title": "Mobile",
        "track": "mobile"
      },
      {
        "time": "12:20-13:05",
        "title": "Lunch",
        "category": CATEGORY_CONSTANTS.BREAKS_MEALS,
        "category_title": "Meal",
        "track": ["mobile", "user_centered_design"]
      },
      {
        "time": "13:05-14:35",
        "title": "It's all about the User Experience",
        "location": "Crystal K",
        "category": CATEGORY_CONSTANTS.MOBILE,
        "category_title": "Mobile",
        "track": "mobile"
      },
      {
        "time": "13:05-14:35",
        "title": "Nuts & Bolts",
        "location": "Crystal L",
        "category": CATEGORY_CONSTANTS.USER_CENTERED_DESIGN,
        "category_title": "User Centered Design",
        "track": "user_centered_design"
      },
      {
        "time": "14:35-15:55",
        "title": "Publishing an App & Offline Considerations",
        "location": "Crystal K",
        "category": CATEGORY_CONSTANTS.MOBILE,
        "category_title": "Mobile",
        "track": "mobile"
      },
      {
        "time": "14:35-15:55",
        "title": "Implementations",
        "location": "Crystal L",
        "category": CATEGORY_CONSTANTS.USER_CENTERED_DESIGN,
        "category_title": "User Centered Design",
        "track": "user_centered_design"
      },
      {
        "time": "15:55-16:15",
        "title": "Break",
        "category": CATEGORY_CONSTANTS.BREAKS_MEALS,
        "category_title": "Break",
        "track": ["mobile", "user_centered_design"]
      },
      {
        "time": "16:15-17:30",
        "title": "Upgrade Information",
        "location": "Crystal J1",
        "category": CATEGORY_CONSTANTS.OTHER,
        "category_title": null
      },
      {
        "time": "17:30-18:30",
        "title": "Introduction/Q&A",
        "location": "Crystal J1",
        "category": CATEGORY_CONSTANTS.CUSTOMER_CENTRICITY,
        "category_title": "Customer Centricity"
      },
      {
        "time": "19:30",
        "title": "Design Track Event - Dinner",
        "location": "Marriott Orlando World Center",
        "category": CATEGORY_CONSTANTS.BREAKS_MEALS,
        "category_title": "Meal"
      }
    ]
  },
  {
    "day": "Thursday",
    "date": "June 8th",
    "events": [
      {
        "time": "07:00-08:00",
        "title": "Breakfast",
        "category": CATEGORY_CONSTANTS.BREAKS_MEALS,
        "category_title": "Meal"
      },
      {
        "time": "08:15-10:15",
        "title": "Breakouts",
        "location": "Crystal J1",
        "category": CATEGORY_CONSTANTS.CUSTOMER_CENTRICITY,
        "category_title": "Customer Centricity"
      },
      {
        "time": "10:15-10:45",
        "title": "Break",
        "category": CATEGORY_CONSTANTS.BREAKS_MEALS,
        "category_title": "Break"
      },
      {
        "time": "10:45-12:45",
        "title": "Breakouts",
        "location": "Crystal J1",
        "category": CATEGORY_CONSTANTS.CUSTOMER_CENTRICITY,
        "category_title": "Customer Centricity"
      },
      {
        "time": "12:45-13:45",
        "title": "Lunch",
        "category": CATEGORY_CONSTANTS.BREAKS_MEALS,
        "category_title": "Meal"
      },
      {
        "time": "13:45-14:30",
        "title": "Action Planning Debrief",
        "location": "Crystal J1",
        "category": CATEGORY_CONSTANTS.CUSTOMER_CENTRICITY,
        "category_title": "Customer Centricity"
      },
      {
        "time": "14:30-14:45",
        "title": "Closing Remarks",
        "location": "Crystal J1",
        "category": CATEGORY_CONSTANTS.MAIN_CONFERENCE,
        "category_title": "PegaWORLD Main Conference"
      },
      {
        "time": "from 15:00",
        "title": "Bus service to airport",
        "category": CATEGORY_CONSTANTS.TRAVEL_REGISTRATION,
        "category_title": "Travel from PegaWorld"
      }
    ]
  }
];

export default agendaData;

