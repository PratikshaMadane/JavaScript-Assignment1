let Z = "Map Methods";
const map = new Map();
map.set('name', 'Pratiksha Madane');
map.set('age', 26);
map.set('occupation', 'developer');

// Update HTML with the heading
document.getElementById("Heading3").innerHTML = Z;

// Display initial map content
let mapContent = `
    <br>Initial Map Content:
    <br>Name: ${map.get('name')}
    <br>Age: ${map.get('age')}
    <br>Occupation: ${map.get('occupation')}
`;

// Add a new entry to the map
map.set('location', 'New York');
mapContent += `
    <br>Updated Map with Location:
    <br>Location: ${map.get('location')}
`;

// Remove an entry from the map
map.delete('age');
mapContent += `
    <br>Map after deleting 'age':
    <br>Name: ${map.get('name')}
    <br>Occupation: ${map.get('occupation')}
    <br>Location: ${map.get('location')}
`;

// Check if the map has specific keys
mapContent += `
    <br>Has 'occupation': ${map.has('occupation')}
    <br>Has 'age': ${map.has('age')}
`;

// Display the size of the map
mapContent += `
    <br>Size of Map: ${map.size}
`;
// Display all map entries

mapContent += 
//All map: Entries:${mapEntries};

// Update the HTML with all map content
document.getElementById("mapContent").innerHTML = mapContent;




















































































