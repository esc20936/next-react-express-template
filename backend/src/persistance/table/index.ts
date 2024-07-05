const getTables = () => {

    // This is a mock implementation of the getTables function
    return [
        {
          id: 1,
          name: "Table 1",
          location: "Main Dining Room",
          capacity: 2,
          available: true,
        },
        {
          id: 2,
          name: "Table 2",
          location: "Main Dining Room",
          capacity: 4,
          available: true,
        },
        {
          id: 3,
          name: "Table 3",
          location: "Patio",
          capacity: 3,
          available: false,
        },
        {
          id: 4,
          name: "Table 4",
          location: "Patio",
          capacity: 2,
          available: true,
        },
        {
          id: 5,
          name: "Table 5",
          location: "Main Dining Room",
          capacity: 4,
          available: true,
        },
        {
          id: 6,
          name: "Table 6",
          location: "Patio",
          capacity: 3,
          available: false,
        },
      ]

}

export { getTables };