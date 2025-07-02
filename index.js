console.log({"activity":"Make a simple musical instrument","availability":0.25,"type":"music","participants":1,"price":0.4,"accessibility":"Minor challenges","duration":"minutes","kidFriendly":true,"link":"","key":"7091374"});
async function GetAPIData() {
            try {
                const response = await fetch("https://dog.ceo/api/breeds/image/random");
                if (response.ok) {
                    const data = await response.json();
                	document.getElementById("image").src = data["message"];
                } else {
                    console.error(`HTTP error ${response.status}`);
                }
            } catch (error) {
                console.error("Fetch failed:", error);
            }
        }
 
		GetAPIData();