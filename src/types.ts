export interface MainImage {
  listing_image_id?: number;
  hex_code?: string | null;
  red?: number | null;
  green?: number | null;
  blue?: number | null;
  hue?: number | null;
  saturation?: number | null;
  brightness?: number | null;
  is_black_and_white?: boolean | null;
  creation_tsz?: number | null;
  listing_id?: number;
  rank?: number | null;
  url_75x75?: string;
  url_170x135?: string;
  url_570xN: string;
  url_fullxfull?: string;
  full_height?: number | null;
  full_width?: number | null;
}

export interface ListingItem {
  listing_id: number;
  state: string;
  user_id: number;
  category_id: number;
  title: string;
  description: string;
  creation_tsz: number;
  ending_tsz: number;
  original_creation_tsz: number;
  last_modified_tsz: number;
  price: string;
  currency_code: string;
  quantity: number;
  sku: string[];
  tags: string[];
  category_path: string[];
  category_path_ids: number[];
  materials: string[];
  shop_section_id: number | null;
  featured_rank: number | null;
  state_tsz: number;
  url: string;
  views: number;
  num_favorers: number;
  shipping_template_id: number | null;
  processing_min: number | null;
  processing_max: number | null;
  who_made: string;
  is_supply: string;
  when_made: string;
  item_weight: number | null;
  item_weight_unit: string;
  item_length: number | null;
  item_width: number | null;
  item_height: number | null;
  item_dimensions_unit: string;
  is_private: boolean;
  recipient: string | null;
  occasion: string | null;
  style: string[] | null;
  non_taxable: boolean;
  is_customizable: boolean;
  is_digital: boolean;
  file_data: string;
  should_auto_renew: boolean;
  language: string;
  has_variations: boolean;
  taxonomy_id: number;
  taxonomy_path: string[];
  used_manufacturer: boolean;
  MainImage: MainImage;
}

export interface ListingProps {
  items?: ListingItem[];
}