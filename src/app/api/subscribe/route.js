export async function POST(request) {
    try {
      const { email } = await request.json();
      
      // Make the call to MailerLite from *server side*
      const res = await fetch("https://api.mailerlite.com/api/v2/subscribers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${process.env.MAILERLITE_API_KEY}`
        },
        body: JSON.stringify({ email, resubscribe: true }),
      });
  
      if (!res.ok) {
        return new Response(`Error from MailerLite: ${res.status}`, { status: res.status });
      }
  
      return new Response(JSON.stringify({ message: "Subscribed successfully!" }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    } catch (error) {
      return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
  }
  