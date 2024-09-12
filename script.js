document.getElementById("reverseStringForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get the string from the input field
    const inputString = document.getElementById("stringInput").value;
    
    // Reverse the string
    const reversedString = reverseString(inputString);

    // Display the result
    document.getElementById("resultText").textContent = `Reversed String: ${reversedString}`;
});

function reverseString(str) {
    // Convert the string to an array, reverse the array, and join it back into a string
    return str.split('').reverse().join('');
}
