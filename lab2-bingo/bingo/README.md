
[codesandbox](https://codesandbox.io/p/sandbox/dazzling-kilby-zirrti?file=%2Fharrystyles%2Fnostyle.css&workspace=%257B%2522activeFileId%2522%253A%2522cl9rbu8af00iilripg3hxeiv8%2522%252C%2522openFiles%2522%253A%255B%2522%252FREADME.md%2522%252C%2522%252Fjs%252Fapp.js%2522%252C%2522%252Fpackage.json%2522%252C%2522%252Findex.html%2522%252C%2522%252Fharrystyles%252Fnostyle.css%2522%255D%252C%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522gitSidebarPanel%2522%253A%2522COMMIT%2522%252C%2522sidekickItems%2522%253A%255B%257B%2522type%2522%253A%2522PREVIEW%2522%252C%2522taskId%2522%253A%2522dev%2522%252C%2522port%2522%253A5173%252C%2522key%2522%253A%2522cl9rbi7tg000m356haboke2jk%2522%252C%2522isMinimized%2522%253Afalse%257D%255D%257D)


#JavaScript Object.values()
##example
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25
};

for (const key in person) {
    if (person.hasOwnProperty(key)) {
        const value = person[key];
        console.log(value);

    }
}
