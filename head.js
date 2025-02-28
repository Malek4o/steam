document.getElementById("idForm").addEventListener("submit", function(event) {
    event.preventDefault(); // إيقاف الإرسال التلقائي للفورم
    const id = document.getElementById("idInput").value;
    checkIdExistence(id);
});

async function checkIdExistence(id) {
    try {
        const filePath = "G:/projects/steam/steam 2/app list/index.html"; // تأكد من المسار
        const response = await fetch(filePath);
        const html = await response.text();
        
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, "text/html");
        const element = doc.getElementById(id);

        document.getElementById("result").textContent = 
            element ? "Available" : "Unavailable";
    } 
    catch (error) {
        console.error("Error:", error);
        document.getElementById("result").textContent = "Error checking ID";
    }
}