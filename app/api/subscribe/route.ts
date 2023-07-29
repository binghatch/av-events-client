import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const email = searchParams.get('EMAIL');
  const firstName = searchParams.get('FNAME');
  const lastName = searchParams.get('LNAME');

  const url = `https://assemblyventures.us20.list-manage.com/subscribe/post-json?u=a221f11e4ce2b090de876eb06&id=ad618ba84f&EMAIL=${email}&FNAME=${firstName}&LNAME=${lastName}&c=__jp0`;

  try {
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json', // Required header for Mailchimp
      },
    });

    const textResponse = await response.text(); // Read the response as plain text

    let data;
    try {
      data = JSON.parse(textResponse); // Try parsing as JSON directly
    } catch (jsonError) {
      // If parsing as JSON fails, try to extract JSONP data
      const jsonpData = textResponse.match(/__jp0\((.*)\)/);
      if (!jsonpData) {
        console.error('Invalid JSONP response format from Mailchimp:', textResponse);
        return new Response(JSON.stringify({ error: 'Invalid response from Mailchimp' }), {
          status: 500,
          headers: {
            'Content-Type': 'application/json',
          },
        });
      }
      data = JSON.parse(jsonpData[1]); // Parse the extracted JSON data
    }

    // Handle the response data from Mailchimp if needed
    console.log('Mailchimp response:', data);

    // Return the response with the success message to the client
    return new Response(JSON.stringify(data), {
      status: response.status,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error while making the request to Mailchimp:', error);
    return new Response(JSON.stringify({ error: 'An error occurred while submitting the form.' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
