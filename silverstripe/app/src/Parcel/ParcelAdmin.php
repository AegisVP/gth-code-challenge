<?php
use SilverStripe\Admin\ModelAdmin;

class ParcelsAdmin extends ModelAdmin
{
  private static $managed_models = [Parcel::class];
  private static $url_segment = 'parcels';
  private static $menu_title = 'Parcels';
}

?>