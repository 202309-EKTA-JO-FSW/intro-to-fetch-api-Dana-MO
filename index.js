// Please read the README.md to understand what to do. Happy Coding !

const fetchUserData = async () => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
        const usersData = await response.json();
        
        const modifiedUsers = usersData.map((user) => {
            return {
                Name: user.name,
                Username: user.username,
                Email: user.email,
                Address: user.address.street,
                phone: user.phone,
                website: user.website,
                company: user.company.name,
            };
        });
        console.log(modifiedUsers);

        const filteredUsers = modifiedUsers.filter(user => user.Email.endsWith(".biz"));
        console.log(filteredUsers);

        const listOfUsers = modifiedUsers.map(user => user.Name);
        console.log(listOfUsers.sort());
    } catch (err) {
        console.log("Error:", err);
    }
}

fetchUserData();