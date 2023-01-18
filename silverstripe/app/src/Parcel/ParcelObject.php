<?php
use SilverStripe\ORM\DataObject;
use SilverStripe\Forms\FieldList;
use SilverStripe\Forms\TextField;
use SilverStripe\Forms\TextareaField;
use SilverStripe\Forms\DateField;

class Parcel extends DataObject
{
  private static $db = [
    'ParcelReferenceId' => 'Varchar(255)',
    'RecipientName' => 'Varchar(255)',
    'RecipientSignature' => 'Text',
    'DeliveryTimestamp' => 'Date',
  ];

  private static $summary_fields = [
    'ParcelReferenceId',
    'RecipientName',
    'DeliveryTimestamp',
  ];

  private static $api_access = true;

  public function getCMSFields()
  {
    return new FieldList(
      [
        TextField::create('ParcelReferenceId'),
        TextField::create('RecipientName'),
        TextareaField::create('RecipientSignature'),
        DateField::create('DeliveryTimestamp'),
      ]
    );
  }
}

?>