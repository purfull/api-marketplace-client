export const DOCS_CONTENT = {
    email: {
      "send-otp": {
        title: "Send Verification Email",
        description:
          "Sends a verification OTP email to a user's registered email.",
        code: `curl -X POST https://api.example.com/verify/email/send-otp \\
    -H "Content-Type: application/json" \\
    -d '{"type":"email","identifier":"user@example.com"}'`,
        details: {
          usage: "Call this API to send a verification OTP to the user's email.",
          params: [
            { name: "type", description: "Type of identifier: email or mobile" },
            { name: "identifier", description: "Email or mobile of the user" },
          ],
          response: `{
    "status": "success",
    "message": "OTP sent successfully"
  }`,
        },
      },
      "verify-otp": {
        title: "Verify OTP",
        description: "Verifies the OTP entered by the user.",
        code: `curl -X POST https://api.example.com/verify/email/verify-otp \\
    -H "Content-Type: application/json" \\
    -d '{"type":"email","identifier":"user@example.com","otp":"123456"}'`,
        details: {
          usage: "Use this API to validate the OTP sent to the user.",
          params: [
            { name: "type", description: "Type of identifier: email or mobile" },
            { name: "identifier", description: "Email or mobile of the user" },
            { name: "otp", description: "OTP received by the user" },
          ],
          response: `{
    "status": "success",
    "message": "OTP verified"
  }`,
        },
      },
      "verify-otpToken": {
        title: "Verify OTP Token",
        description: "Verifies OTP using a token-based approach.",
        code: `curl -X POST https://api.example.com/verify/email/verify-otpToken \\
    -H "Content-Type: application/json" \\
    -d '{"token":"abcd1234"}'`,
        details: {
          usage: "Use this endpoint to verify OTP with a token.",
          params: [{ name: "token", description: "OTP token received" }],
          response: `{
    "status": "success",
    "message": "Token verified"
  }`,
        },
      },
    },
    location: {
      "by-pincode": {
        title: "Get Location by Pincode",
        description: "Retrieve city/state details using a pincode.",
        code: `curl https://api.example.com/location/by-pincode?pincode=110001`,
      },
      "by-city": {
        title: "Get Location by City",
        description: "Retrieve pincode/state using city name.",
        code: `curl https://api.example.com/location/by-city?city=Delhi`,
      },
      states: {
        title: "Get All States",
        description: "Retrieve all states available in the database.",
        code: `curl https://api.example.com/location/states`,
      },
    },
    form: {
      submit: {
        title: "Submit Form Data",
        description: "Submit a new form entry.",
        code: `curl -X POST https://api.example.com/form/submit -d '{}'`,
      },
      list: {
        title: "Get Form Entries",
        description: "Retrieve all submitted form entries.",
        code: `curl https://api.example.com/form/list`,
      },
      delete: {
        title: "Delete Form Entry",
        description: "Delete a specific form entry by ID.",
        code: `curl -X DELETE https://api.example.com/form/delete/1`,
      },
    },
  };
  