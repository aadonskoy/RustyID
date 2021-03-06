# RustyID
RustyID is an API to privately share self sovereign information between peers in a peer-to-peer network. The sharing is done by allowing clients to share their data only when it is required to do so via WebRTC. The information exchange is done according o the standard protocol set for RustyID, see external documentation for details. Verifiable information needs to be signed by the endpoint, before it is saved.

### Data storage
RustyID stores your data locally. The data is saved as xml to a file with suffix `.rsid`. A user should have a file for each endpoint.

For example:
```
<meta> 
  <alias>Rasmus</alias> 
  <endpoint>facebook.com</endpoint>
  <check>ab3EE26i23i4298&&dsiASDASe9398EEE123Asdkkvo093#</check>
  <import url="public_profile.rsid">
</meta>

<information>
  <g id="public" auth="false">
    <firstname>Rasmus</firstname>
    <lastname>Viitanen</lastname>
    <favourite_color>blue</favourite_color>
  </g>

  <g id="private" auth="true">
    <password>12345</password>
    <number>987654321</password>
  </g>
  
  <g id="verified" auth="false">
    <subscription>Ao1jd@EEas2@326i23u4i234&434&</subscription>
    <premium_subscription>aASD#SDEjiedj9as9#34</premium_subscription>
  </g>
</information>
```

Verifiable information is stored once the endpoint signs the data, else the client can manipulate information without verification rofm het endpoint. This is however dangerous, and the endpoint should mainly write to the `rsid` files.

### Enable data sharing and data saving
Data can be shared by first establishing a connection to a peer. This is done from the client, by sending a request to the signaling server, which later establishes a connection between the client, and the endpoint.

The endpoint then sends any of the following requests to receive the data: 

```
get_field("firstname");                 // DOES NOT REQUEIRE AUTH
add_field("firstname", "A name");       // REQUIRES AUTH
update_field("firstname" , "New name"); // REQUIRES AUTH
get_field("password");                  // REQUIRES AUTH
```

The client can define new identities easily from the mainpage, or save them directly through the auth notifications sent from the endpoints.

### Secure connections and private data ownership
RustyID is a secure and private way to share information about yourself, without the possibility of the information being linked to you the next time you establish a connection. Key to this is:

  1. All information about you is stored on your device, or linked to a cloud.
  2. All information about you is only shared with your approval.
  3. User metadata changes with each connection, disallowing the end peer to store data about you.
  4. Endpoints do not change connection id, allowing users to store information targeted at each endpoint, but not vice versa.
  5. All data and connections are securily encrypted.
  6. You cannot fake being someone else, with asymmetric encryption, you assert that you are the only one with the specified username, without giving up your identity.
  7. You cannot fake data. Since data is asymmetrically encryped and saved to your profile, only the encryptor can read the real data. Meaning that a user is unable to e.g. fake that he has "paid" for a service. 

## Establish the connection on a private network
To use RustyID on your own private network, you have to set up your own singaling server, see [signaling](https://github.com/rasviitanen/rustysignal) for more information on this.
