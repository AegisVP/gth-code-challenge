# GREEN TO HOME Signature Full Stack Challenge

## Getting started

### Install Silverstripe Dependencies via Composer

```
docker run --rm --interactive --tty \
  --volume $PWD/silverstripe:/app \
  composer:2.3.9 install --ignore-platform-req=ext-intl
```

### Docker Compose

MySQL and Silverstripe can be started via Docker. Run the following Terminal command from this folder.

_Note: If you are using an ARM Mac, you need to comment in line `platform: linux/amd64 #enable if M1 Mac` in
`docker-compose.yml`._

```
docker compose up
```

After startup you should have the following endpoints available:

- SilverStripe CMS (Port: 8080)
- Adminer (Port: 8081)

## SilverStripe

When starting up the first time, please clear cache and build database model, before you log into the administration.

### Clear Cache

- [http://localhost:8080/?flush](http://localhost:8080/?flush)

### Build Database Model

- [http://localhost:8080/dev/build](http://localhost:8080/dev/build)

### SilverStripe Administration

SilverStripe Administration is available at [http://localhost:8080/admin](http://localhost:8080/admin)

User: `admin`

Password: `admin`

## Adminer

Adminer is a lightweight MySQL database browser. Open
[http://localhost:8081/?server=db&username=root&db=gth](http://localhost:8081/?server=db&username=root&db=gth) to
browse. Username and Password is: `root`

## React

New (empty) app was created with `create-react-app`. Use `yarn` or `npm` to install dependencies.

## Docs & Tutorials

### Silverstripe

- [Introduction to the Data Model and ORM](https://docs.silverstripe.org/en/4/developer_guides/model/data_model_and_orm/)
- [Introduction to ModelAdmin ](https://www.silverstripe.org/learn/lessons/v4/introduction-to-modeladmin-1)
- [RestAPI Extension](https://github.com/silverstripe/silverstripe-restfulserver)

### React

- [Create React App](https://create-react-app.dev/)
- Package: [react-signature-canvas](https://www.npmjs.com/package/react-signature-canvas)
- [Proxying API Requests in Development](https://create-react-app.dev/docs/proxying-api-requests-in-development/)

## Helpful Tools

- [base64-to-image-converter](https://codebeautify.org/base64-to-image-converter)
- [CORS Issues?](https://create-react-app.dev/docs/proxying-api-requests-in-development/)

# Challenge

## Step 1

Create a Silverstripe (PHP) backend data model to store the shipment information (package number, recipient name, ...)

Create a Parcel class of type `SilverStripe\ORM\DataObject`.

Define the following database attributes:

- `ParcelReferenceId` of type `Varchar`
- `RecipientName` of type `Varchar`
- `RecipientSignature` of type `Text` (signature should be saved as PNG file and Base64 encoding in the database)
- `DeliveryTimestamp` of type `Datetime` Return appropriate SilverStripe form fields for each database attribute using
  the `getCMSFields()` function

Define the following fields as SilverStripe `summary_fields`:

- `ParcelReferenceId`
- `RecipientName`
- `DeliveryTimestamp`

Expand the `ModelAdmin` so that your class `Parcel` is visible in the administration interface.
([Tip!](https://docs.silverstripe.org/en/4/developer_guides/customizing_the_admin_interface/))

Call the SilverStripe [Build](http://localhost:8080/dev/build) and [Flush](http://localhost:8080/?flush) mechanism and
verify that your type has been created in the database and appears in the SilverStripe Admin.

Create a shipment with any `ParcelReferenceId`.

## Step 2

Create a JSON rest interface in Silverstripe that lists the shipments and allows the shipment information to be updated.

Expose the `Parcel` class as a REST interface. See the
[restfulserver](https://github.com/silverstripe/silverstripe-restfulserver) documentation for how to enable the `Parcel`
class (step 1) as an interface.

Verify that endpoint

```
GET http://localhost:8080/api/v1/Parcel
```

is available.

## Step 3

Create a React application, similar to the one shown in the wireframe, which transmits the recipient name and signature
of a shipment to the interface from step 2.

`create-react-app` was used to create the `react-frontend` folder and is bootable.
(https://github.com/facebook/create-react-app)

Install the npm package `axios` for interface communication with the SilverStripe backend.

Install the npm package `react-signature-canvas`, which includes a ready-made react component with a signature field.

Use `axios` to query the information of the first delivery via the interface.

_TIP: To prevent CORS problems, use the proxy attribute in the package.json_

The name of the recipient can be entered in a text field, below which you insert the signature component and a button
"Send package acceptance".

When you click the button, the name of the recipient and the signature of the PNG image file are base64 encoded and
transferred to the backend via a PUT request. In addition, the DeliveryTimestamp attribute is filled with the current
time.

Verify that the data was correctly submitted to the SilverStripe back office.
