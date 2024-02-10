
export default function SendMessage(contacts) {
  let form = new FormData();
  
  const from = "Vonage APIs";
  const text = "A text message sent using the Vonage SMS API";

  contacts.forEach((element) => {
    console.log("Button clicked!", element.number);
    let to = element.number;
    sendSMS({ to, from, text });
  })
}