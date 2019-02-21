import React from 'react';

export const constants = {
    cat: {
        title: "Feline Finder",
        data: [ {
            id: 0,
            name: 'Blackie',
            age: 2,
            sex:'M', 
            measurement: 'Year',
            colour: 'Black and White', 
            location: 'Swansea',
            postcode: 'SA7',
            breed: 'dsh',
            type: 'cat',
            stray: false,
            feral: false,
            neutored: false,
            microchip: true,
            missing_time: "5 days"
        },
        {
            id: 1,
            name: 'Charlie',
            age: 2,
            measurement: 'Year',
            sex:'F', 
            colour: 'Black and White', 
            location: 'Swansea',
            postcode: 'SA7',
            breed: 'dsh',
            type: 'cat',
            stray: false,
            feral: false,
            neutored: false,
            microchip: true,
            missing_time: "5 days"
        }],

    },
    dog: {
        title: "Canine Finder",
        data: [ {
            id: 0,
            name: 'Honey',
            age: 2,
            measurement: 'Year',
            colour: 'Golden', 
            location: 'Swansea',
            postcode: 'SA7',
            breed: 'Golden Retriever',
            type: 'dog',
            stray: false,
            feral: false,
            neutored: false,
            microchip: true,
            missing_time: "5 days"
        },
        {
            id: 1,
            name: 'Dug',
            age: 2,
            measurement: 'Year',
            colour: 'Tan', 
            location: 'Swansea',
            postcode: 'SA7',
            breed: 'Leonberger',
            type: 'cat',
            stray: false,
            feral: false,
            neutored: false,
            microchip: true,
            missing_time: "5 days"
        }],
    }
};

export const AppContext = React.createContext(
    constants.dog
);