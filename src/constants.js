export const IMG_CDN_URL ="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"

export const FETCH_MENU_URL="https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.2156354&lng=72.63694149999999&restaurantId="


// const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.2156354&lng=72.63694149999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

// const json= await data.json()
// setresList(json?.data?.cards[2]?.card?.card?gridElements?.infoWithStyle);
// console.log(json?.data)
// const dt=json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
export const RESTAURANT_DATA = // 20230921163448
// https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.2156354&lng=72.63694149999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING

{
  "statusCode": 0,
  "data": {
    "statusMessage": "done successfully",
    "pageOffset": {
      "nextOffset": "COVCELQ4KICwqsnt6sjJTDCnEzgD",
      "widgetOffset": {
        "NewListingView_Topical_Fullbleed": "",
        "NewListingView_category_bar_chicletranking_TwoRows": "",
        "NewListingView_category_bar_chicletranking_TwoRows_Rendition": "",
        "Restaurant_Group_WebView_SEO_PB_Theme": "",
        "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo": "10",
        "inlineFacetFilter": "",
        "restaurantCountWidget": ""
      }
    },
    "cards": [
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
            "header": {
              "headerStyling": {
                "padding": {
                  "left": 16,
                  "top": 14,
                  "bottom": 2
                }
              }
            },
            "layout": {
              "rows": 1,
              "columns": 2,
              "horizontalScrollEnabled": true,
              "shouldSnap": true,
              "itemSpacing": 10,
              "widgetPadding": {
                
              },
              "containerStyle": {
                "containerPadding": {
                  "left": 16,
                  "top": 12,
                  "right": 16,
                  "bottom": 12
                }
              },
              "scrollBar": {
                "scrollThumbColor": "#E46D47",
                "scrollTrackColor": "#E4E4E4",
                "width": 54,
                "height": 4,
                "scrollStyling": {
                  "padding": {
                    "top": 6,
                    "bottom": 12
                  }
                }
              },
              "autoScrollConfig": {
                "isScrollEnabled": true,
                "autoScrollDuration": 4,
                "autoScrollResetDuration": 4
              },
              "dotScrollBar": {
                "activeColor": "#36393E",
                "inactiveColor": "#66686E",
                "activeSize": 16,
                "inactiveMediumSize": 7,
                "inactiveSmallSize": 4,
                "dotSpacing": 8,
                "windowSize": 5,
                "showCount": true,
                "textColor": "#FFFFFF",
                "scrollStyling": {
                  "padding": {
                    "top": 6,
                    "bottom": 12
                  }
                }
              }
            },
            "imageGridCards": {
              "info": [
                {
                  "id": "1200052",
                  "imageId": "rng/md/carousel/production/3967580c0329555334072b18ba3c889c",
                  "action": {
                    "link": "https://www.swiggy.com/collections/92870?collection_id=92870&tags=layout_ux4&type=rcv2",
                    "text": "All new super",
                    "type": "WEBLINK"
                  },
                  "entityType": "BANNER",
                  "accessibility": {
                    "altText": "GET 50% OFF ON FIRST ORDER",
                    "altTextCta": "ORDER NOW"
                  },
                  "entityId": "92870",
                  "frequencyCapping": {
                    
                  }
                },
                {
                  "id": "1272331",
                  "imageId": "rng/md/carousel/production/70712689205fe5b828df8e0ac94ce70f",
                  "action": {
                    "link": "https://www.swiggy.com/menu/452610",
                    "text": "NIC Ice Creams",
                    "type": "WEBLINK"
                  },
                  "entityType": "BANNER",
                  "accessibility": {
                    "altText": "NIC Ice Creams",
                    "altTextCta": "Order Now"
                  },
                  "entityId": "452610",
                  "frequencyCapping": {
                    
                  },
                  "isManualAds": true
                }
              ],
              "style": {
                "width": {
                  "type": "TYPE_RELATIVE",
                  "value": 0.95238,
                  "reference": "RELATIVE_DIMENSION_REFERENCE_CONTAINER_WIDTH"
                },
                "height": {
                  "type": "TYPE_RELATIVE",
                  "value": 0.59685,
                  "reference": "RELATIVE_DIMENSION_REFERENCE_WIDTH"
                }
              }
            },
            "id": "topical_banner",
            "gridElements": {
              "infoWithStyle": {
                "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.ImageInfoLayoutCard",
                "info": [
                  {
                    "id": "1200052",
                    "imageId": "rng/md/carousel/production/3967580c0329555334072b18ba3c889c",
                    "action": {
                      "link": "https://www.swiggy.com/collections/92870?collection_id=92870&tags=layout_ux4&type=rcv2",
                      "text": "All new super",
                      "type": "WEBLINK"
                    },
                    "entityType": "BANNER",
                    "accessibility": {
                      "altText": "GET 50% OFF ON FIRST ORDER",
                      "altTextCta": "ORDER NOW"
                    },
                    "entityId": "92870",
                    "frequencyCapping": {
                      
                    }
                  },
                  {
                    "id": "1272331",
                    "imageId": "rng/md/carousel/production/70712689205fe5b828df8e0ac94ce70f",
                    "action": {
                      "link": "https://www.swiggy.com/menu/452610",
                      "text": "NIC Ice Creams",
                      "type": "WEBLINK"
                    },
                    "entityType": "BANNER",
                    "accessibility": {
                      "altText": "NIC Ice Creams",
                      "altTextCta": "Order Now"
                    },
                    "entityId": "452610",
                    "frequencyCapping": {
                      
                    },
                    "isManualAds": true
                  }
                ],
                "style": {
                  "width": {
                    "type": "TYPE_RELATIVE",
                    "value": 0.95238,
                    "reference": "RELATIVE_DIMENSION_REFERENCE_CONTAINER_WIDTH"
                  },
                  "height": {
                    "type": "TYPE_RELATIVE",
                    "value": 0.59685,
                    "reference": "RELATIVE_DIMENSION_REFERENCE_WIDTH"
                  }
                }
              }
            }
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
            "header": {
              "title": "What's on your mind?",
              "headerStyling": {
                "padding": {
                  "left": 16,
                  "top": 16,
                  "bottom": 4
                }
              }
            },
            "layout": {
              "rows": 1,
              "columns": 10,
              "horizontalScrollEnabled": true,
              "itemSpacing": 24,
              "widgetPadding": {
                
              },
              "containerStyle": {
                "containerPadding": {
                  "left": 8,
                  "top": 8,
                  "right": 12,
                  "bottom": 4
                }
              },
              "scrollBar": {
                
              },
              "widgetTheme": {
                "defaultMode": {
                  "backgroundColour": "#FFFFFF",
                  "theme": "THEME_TYPE_LIGHT"
                },
                "darkMode": {
                  "theme": "THEME_TYPE_DARK"
                }
              }
            },
            "imageGridCards": {
              "info": [
                {
                  "id": "750580",
                  "imageId": "v1674029856/PC_Creative%20refresh/3D_bau/banners_new/Pizza.png",
                  "action": {
                    "link": "https://www.swiggy.com/collections/83644?collection_id=83644&tags=layout_CCS_Pizza&type=rcv2",
                    "text": "pizzas",
                    "type": "WEBLINK"
                  },
                  "entityType": "BANNER",
                  "accessibility": {
                    "altText": "restaurants curated for pizza",
                    "altTextCta": "open"
                  },
                  "entityId": "swiggy://collectionV2?collection_id=83644&tags=layout_CCS_Pizza",
                  "frequencyCapping": {
                    
                  }
                },
                {
                  "id": "762797",
                  "imageId": "v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Burger.png",
                  "action": {
                    "link": "https://www.swiggy.com/collections/83637?collection_id=83637&tags=layout_CCS_Burger&type=rcv2",
                    "text": "Burgers",
                    "type": "WEBLINK"
                  },
                  "entityType": "BANNER",
                  "accessibility": {
                    "altText": "restaurants curated for burger",
                    "altTextCta": "open"
                  },
                  "entityId": "swiggy://collectionV2?collection_id=83637&tags=layout_CCS_Burger",
                  "frequencyCapping": {
                    
                  }
                },
                {
                  "id": "750560",
                  "imageId": "v1674029843/PC_Creative%20refresh/3D_bau/banners_new/Vada_Pav.png",
                  "action": {
                    "link": "https://www.swiggy.com/collections/80418?collection_id=80418&tags=layout_BAU_Contextual%2Cvada_pav&type=rcv2",
                    "text": "Vada Pav",
                    "type": "WEBLINK"
                  },
                  "entityType": "BANNER",
                  "accessibility": {
                    "altText": "restaurants curated for vada pav",
                    "altTextCta": "open"
                  },
                  "entityId": "80418",
                  "frequencyCapping": {
                    
                  }
                },
                {
                  "id": "750230",
                  "imageId": "v1674029860/PC_Creative%20refresh/3D_bau/banners_new/Samosas.png",
                  "action": {
                    "link": "https://www.swiggy.com/collections/80397?collection_id=80397&tags=layout_BAU_Contextual%2Csamosa&type=rcv2",
                    "text": "Samosa",
                    "type": "WEBLINK"
                  },
                  "entityType": "BANNER",
                  "accessibility": {
                    "altText": "restaurants curated for samosa",
                    "altTextCta": "open"
                  },
                  "entityId": "80397",
                  "frequencyCapping": {
                    
                  }
                },
                {
                  "id": "749874",
                  "imageId": "v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Cakes.png",
                  "action": {
                    "link": "https://www.swiggy.com/collections/83656?collection_id=83656&tags=layout_CCS_Cake&type=rcv2",
                    "text": "Cakes",
                    "type": "WEBLINK"
                  },
                  "entityType": "BANNER",
                  "accessibility": {
                    "altText": "restaurant curated for cakes",
                    "altTextCta": "open"
                  },
                  "entityId": "swiggy://collectionV2?collection_id=83656&tags=layout_CCS_Cake",
                  "frequencyCapping": {
                    
                  }
                },
                {
                  "id": "749879",
                  "imageId": "v1674029844/PC_Creative%20refresh/3D_bau/banners_new/Chole_Bature.png",
                  "action": {
                    "link": "https://www.swiggy.com/collections/80383?collection_id=80383&tags=layout_CCS_CholeBhature&type=rcv2",
                    "text": "Chole Bhature",
                    "type": "WEBLINK"
                  },
                  "entityType": "BANNER",
                  "accessibility": {
                    "altText": "restaurant curated for chhole bhatoore",
                    "altTextCta": "open"
                  },
                  "entityId": "swiggy://collectionV2?collection_id=80383&tags=layout_CCS_CholeBhature",
                  "frequencyCapping": {
                    
                  }
                },
                {
                  "id": "750207",
                  "imageId": "v1674029854/PC_Creative%20refresh/3D_bau/banners_new/Pasta.png",
                  "action": {
                    "link": "https://www.swiggy.com/collections/80480?collection_id=80480&tags=layout_BAU_Contextual%2Cpasta%2Cads_pc_pasta&type=rcv2",
                    "text": "Pasta",
                    "type": "WEBLINK"
                  },
                  "entityType": "BANNER",
                  "accessibility": {
                    "altText": "restaurant curated for pasta",
                    "altTextCta": "open"
                  },
                  "entityId": "80480",
                  "frequencyCapping": {
                    
                  }
                },
                {
                  "id": "750638",
                  "imageId": "v1674029843/PC_Creative%20refresh/3D_bau/banners_new/Juice.png",
                  "action": {
                    "link": "https://www.swiggy.com/collections/80446?collection_id=80446&tags=layout_Juices_Contextual&type=rcv2",
                    "text": "Juice",
                    "type": "WEBLINK"
                  },
                  "entityType": "BANNER",
                  "accessibility": {
                    "altText": "restaurants curated for juice",
                    "altTextCta": "open"
                  },
                  "entityId": "swiggy://collectionV2?collection_id=80446&tags=layout_Juices_Contextual",
                  "frequencyCapping": {
                    
                  }
                },
                {
                  "id": "750235",
                  "imageId": "v1674029860/PC_Creative%20refresh/3D_bau/banners_new/Sandwich.png",
                  "action": {
                    "link": "https://www.swiggy.com/collections/83667?collection_id=83667&tags=layout_CCS_Sandwiches&type=rcv2",
                    "text": "Sandwich",
                    "type": "WEBLINK"
                  },
                  "entityType": "BANNER",
                  "accessibility": {
                    "altText": "restaurants curated for sandwich",
                    "altTextCta": "open"
                  },
                  "entityId": "swiggy://collectionV2?collection_id=83667&tags=layout_CCS_Sandwiches",
                  "frequencyCapping": {
                    
                  }
                },
                {
                  "id": "750223",
                  "imageId": "v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Rolls.png",
                  "action": {
                    "link": "https://www.swiggy.com/collections/83670?collection_id=83670&tags=layout_CCS_Rolls&type=rcv2",
                    "text": "Rolls",
                    "type": "WEBLINK"
                  },
                  "entityType": "BANNER",
                  "accessibility": {
                    "altText": "restaurants curated for roll",
                    "altTextCta": "open"
                  },
                  "entityId": "swiggy://collectionV2?collection_id=83670&tags=layout_CCS_Rolls",
                  "frequencyCapping": {
                    
                  }
                },
                {
                  "id": "750217",
                  "imageId": "v1674029854/PC_Creative%20refresh/3D_bau/banners_new/Pav_Bhaji.png",
                  "action": {
                    "link": "https://www.swiggy.com/collections/80364?collection_id=80364&tags=layout_PavBhaji_Contextual&type=rcv2",
                    "text": "Pav Bhaji",
                    "type": "WEBLINK"
                  },
                  "entityType": "BANNER",
                  "accessibility": {
                    "altText": "restaurant curated for pav bhaji",
                    "altTextCta": "open"
                  },
                  "entityId": "swiggy://collectionV2?collection_id=80364&tags=layout_PavBhaji_Contextual",
                  "frequencyCapping": {
                    
                  }
                },
                {
                  "id": "750132",
                  "imageId": "v1674029850/PC_Creative%20refresh/3D_bau/banners_new/Dosa.png",
                  "action": {
                    "link": "https://www.swiggy.com/collections/80426?collection_id=80426&tags=layout_CCS_Dosa&type=rcv2",
                    "text": "Dosa",
                    "type": "WEBLINK"
                  },
                  "entityType": "BANNER",
                  "accessibility": {
                    "altText": "restaurants curated for dosa",
                    "altTextCta": "open"
                  },
                  "entityId": "swiggy://collectionV2?collection_id=80426&tags=layout_CCS_Dosa",
                  "frequencyCapping": {
                    
                  }
                },
                {
                  "id": "749761",
                  "imageId": "v1674029851/PC_Creative%20refresh/3D_bau/banners_new/Khichdi.png",
                  "action": {
                    "link": "https://www.swiggy.com/collections/80456?collection_id=80456&tags=layout_BAU_Contextual%2Ckhichdi&type=rcv2",
                    "text": "Khichdi",
                    "type": "WEBLINK"
                  },
                  "entityType": "BANNER",
                  "accessibility": {
                    "altText": "restaurants curated for khicdhi",
                    "altTextCta": "open"
                  },
                  "entityId": "80456",
                  "frequencyCapping": {
                    
                  }
                },
                {
                  "id": "750592",
                  "imageId": "v1675667625/PC_Creative%20refresh/Biryani_2.png",
                  "action": {
                    "link": "https://www.swiggy.com/collections/83649?collection_id=83649&tags=layout_CCS_Biryani&type=rcv2",
                    "text": "Biryani",
                    "type": "WEBLINK"
                  },
                  "entityType": "BANNER",
                  "accessibility": {
                    "altText": "restaurants curated for biryani",
                    "altTextCta": "open"
                  },
                  "entityId": "swiggy://collectionV2?collection_id=83649&tags=layout_CCS_Biryani",
                  "frequencyCapping": {
                    
                  }
                },
                {
                  "id": "750239",
                  "imageId": "v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Shakes.png",
                  "action": {
                    "link": "https://www.swiggy.com/collections/83674?collection_id=83674&tags=layout_CCS_Shakes&type=rcv2",
                    "text": "Shake",
                    "type": "WEBLINK"
                  },
                  "entityType": "BANNER",
                  "accessibility": {
                    "altText": "restaurant curated for shakes",
                    "altTextCta": "open"
                  },
                  "entityId": "swiggy://collectionV2?collection_id=83674&tags=layout_CCS_Shakes",
                  "frequencyCapping": {
                    
                  }
                },
                {
                  "id": "750123",
                  "imageId": "v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Dhokla.png",
                  "action": {
                    "link": "https://www.swiggy.com/collections/80423?collection_id=80423&tags=layout_BAU_Contextual%2Cdhokla&type=rcv2",
                    "text": "Dhokla",
                    "type": "WEBLINK"
                  },
                  "entityType": "BANNER",
                  "accessibility": {
                    "altText": "restaurants curated for dhokla",
                    "altTextCta": "open"
                  },
                  "entityId": "80423",
                  "frequencyCapping": {
                    
                  }
                },
                {
                  "id": "750258",
                  "imageId": "v1674029860/PC_Creative%20refresh/3D_bau/banners_new/Thepla.png",
                  "action": {
                    "link": "https://www.swiggy.com/collections/80409?collection_id=80409&tags=layout_BAU_Contextual%2Cthepla&type=rcv2",
                    "text": "Thepla",
                    "type": "WEBLINK"
                  },
                  "entityType": "BANNER",
                  "accessibility": {
                    "altText": "restaurant curated for thepla",
                    "altTextCta": "open"
                  },
                  "entityId": "80409",
                  "frequencyCapping": {
                    
                  }
                },
                {
                  "id": "750209",
                  "imageId": "v1674029847/PC_Creative%20refresh/3D_bau/banners_new/Pastry.png",
                  "action": {
                    "link": "https://www.swiggy.com/collections/80358?collection_id=80358&tags=layout_BAU_Contextual%2Clayout_ux4&type=rcv2",
                    "text": "Pastry",
                    "type": "WEBLINK"
                  },
                  "entityType": "BANNER",
                  "accessibility": {
                    "altText": "restaurant curated for Pastry",
                    "altTextCta": "open"
                  },
                  "entityId": "80358",
                  "frequencyCapping": {
                    
                  }
                },
                {
                  "id": "750640",
                  "imageId": "v1674029847/PC_Creative%20refresh/3D_bau/banners_new/Kachori.png",
                  "action": {
                    "link": "https://www.swiggy.com/collections/80450?collection_id=80450&tags=layout_BAU_Contextual%2Ckachori&type=rcv2",
                    "text": "Kachori",
                    "type": "WEBLINK"
                  },
                  "entityType": "BANNER",
                  "accessibility": {
                    "altText": "restaurant curated for kachori",
                    "altTextCta": "open"
                  },
                  "entityId": "80450",
                  "frequencyCapping": {
                    
                  }
                },
                {
                  "id": "749763",
                  "imageId": "v1674029844/PC_Creative%20refresh/3D_bau/banners_new/Lassi.png",
                  "action": {
                    "link": "https://www.swiggy.com/collections/80459?collection_id=80459&tags=layout_BAU_Contextual%2Classi&type=rcv2",
                    "text": "Lassi",
                    "type": "WEBLINK"
                  },
                  "entityType": "BANNER",
                  "accessibility": {
                    "altText": "restaurant curated for lassi",
                    "altTextCta": "open"
                  },
                  "entityId": "80459",
                  "frequencyCapping": {
                    
                  }
                }
              ],
              "style": {
                "width": {
                  "type": "TYPE_RELATIVE",
                  "value": 0.2941,
                  "reference": "RELATIVE_DIMENSION_REFERENCE_CONTAINER_WIDTH"
                },
                "height": {
                  "type": "TYPE_RELATIVE",
                  "value": 1.2444,
                  "reference": "RELATIVE_DIMENSION_REFERENCE_WIDTH"
                }
              }
            },
            "id": "whats_on_your_mind",
            "gridElements": {
              "infoWithStyle": {
                "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.ImageInfoLayoutCard",
                "info": [
                  {
                    "id": "750580",
                    "imageId": "v1674029856/PC_Creative%20refresh/3D_bau/banners_new/Pizza.png",
                    "action": {
                      "link": "https://www.swiggy.com/collections/83644?collection_id=83644&tags=layout_CCS_Pizza&type=rcv2",
                      "text": "pizzas",
                      "type": "WEBLINK"
                    },
                    "entityType": "BANNER",
                    "accessibility": {
                      "altText": "restaurants curated for pizza",
                      "altTextCta": "open"
                    },
                    "entityId": "swiggy://collectionV2?collection_id=83644&tags=layout_CCS_Pizza",
                    "frequencyCapping": {
                      
                    }
                  },
                  {
                    "id": "762797",
                    "imageId": "v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Burger.png",
                    "action": {
                      "link": "https://www.swiggy.com/collections/83637?collection_id=83637&tags=layout_CCS_Burger&type=rcv2",
                      "text": "Burgers",
                      "type": "WEBLINK"
                    },
                    "entityType": "BANNER",
                    "accessibility": {
                      "altText": "restaurants curated for burger",
                      "altTextCta": "open"
                    },
                    "entityId": "swiggy://collectionV2?collection_id=83637&tags=layout_CCS_Burger",
                    "frequencyCapping": {
                      
                    }
                  },
                  {
                    "id": "750560",
                    "imageId": "v1674029843/PC_Creative%20refresh/3D_bau/banners_new/Vada_Pav.png",
                    "action": {
                      "link": "https://www.swiggy.com/collections/80418?collection_id=80418&tags=layout_BAU_Contextual%2Cvada_pav&type=rcv2",
                      "text": "Vada Pav",
                      "type": "WEBLINK"
                    },
                    "entityType": "BANNER",
                    "accessibility": {
                      "altText": "restaurants curated for vada pav",
                      "altTextCta": "open"
                    },
                    "entityId": "80418",
                    "frequencyCapping": {
                      
                    }
                  },
                  {
                    "id": "750230",
                    "imageId": "v1674029860/PC_Creative%20refresh/3D_bau/banners_new/Samosas.png",
                    "action": {
                      "link": "https://www.swiggy.com/collections/80397?collection_id=80397&tags=layout_BAU_Contextual%2Csamosa&type=rcv2",
                      "text": "Samosa",
                      "type": "WEBLINK"
                    },
                    "entityType": "BANNER",
                    "accessibility": {
                      "altText": "restaurants curated for samosa",
                      "altTextCta": "open"
                    },
                    "entityId": "80397",
                    "frequencyCapping": {
                      
                    }
                  },
                  {
                    "id": "749874",
                    "imageId": "v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Cakes.png",
                    "action": {
                      "link": "https://www.swiggy.com/collections/83656?collection_id=83656&tags=layout_CCS_Cake&type=rcv2",
                      "text": "Cakes",
                      "type": "WEBLINK"
                    },
                    "entityType": "BANNER",
                    "accessibility": {
                      "altText": "restaurant curated for cakes",
                      "altTextCta": "open"
                    },
                    "entityId": "swiggy://collectionV2?collection_id=83656&tags=layout_CCS_Cake",
                    "frequencyCapping": {
                      
                    }
                  },
                  {
                    "id": "749879",
                    "imageId": "v1674029844/PC_Creative%20refresh/3D_bau/banners_new/Chole_Bature.png",
                    "action": {
                      "link": "https://www.swiggy.com/collections/80383?collection_id=80383&tags=layout_CCS_CholeBhature&type=rcv2",
                      "text": "Chole Bhature",
                      "type": "WEBLINK"
                    },
                    "entityType": "BANNER",
                    "accessibility": {
                      "altText": "restaurant curated for chhole bhatoore",
                      "altTextCta": "open"
                    },
                    "entityId": "swiggy://collectionV2?collection_id=80383&tags=layout_CCS_CholeBhature",
                    "frequencyCapping": {
                      
                    }
                  },
                  {
                    "id": "750207",
                    "imageId": "v1674029854/PC_Creative%20refresh/3D_bau/banners_new/Pasta.png",
                    "action": {
                      "link": "https://www.swiggy.com/collections/80480?collection_id=80480&tags=layout_BAU_Contextual%2Cpasta%2Cads_pc_pasta&type=rcv2",
                      "text": "Pasta",
                      "type": "WEBLINK"
                    },
                    "entityType": "BANNER",
                    "accessibility": {
                      "altText": "restaurant curated for pasta",
                      "altTextCta": "open"
                    },
                    "entityId": "80480",
                    "frequencyCapping": {
                      
                    }
                  },
                  {
                    "id": "750638",
                    "imageId": "v1674029843/PC_Creative%20refresh/3D_bau/banners_new/Juice.png",
                    "action": {
                      "link": "https://www.swiggy.com/collections/80446?collection_id=80446&tags=layout_Juices_Contextual&type=rcv2",
                      "text": "Juice",
                      "type": "WEBLINK"
                    },
                    "entityType": "BANNER",
                    "accessibility": {
                      "altText": "restaurants curated for juice",
                      "altTextCta": "open"
                    },
                    "entityId": "swiggy://collectionV2?collection_id=80446&tags=layout_Juices_Contextual",
                    "frequencyCapping": {
                      
                    }
                  },
                  {
                    "id": "750235",
                    "imageId": "v1674029860/PC_Creative%20refresh/3D_bau/banners_new/Sandwich.png",
                    "action": {
                      "link": "https://www.swiggy.com/collections/83667?collection_id=83667&tags=layout_CCS_Sandwiches&type=rcv2",
                      "text": "Sandwich",
                      "type": "WEBLINK"
                    },
                    "entityType": "BANNER",
                    "accessibility": {
                      "altText": "restaurants curated for sandwich",
                      "altTextCta": "open"
                    },
                    "entityId": "swiggy://collectionV2?collection_id=83667&tags=layout_CCS_Sandwiches",
                    "frequencyCapping": {
                      
                    }
                  },
                  {
                    "id": "750223",
                    "imageId": "v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Rolls.png",
                    "action": {
                      "link": "https://www.swiggy.com/collections/83670?collection_id=83670&tags=layout_CCS_Rolls&type=rcv2",
                      "text": "Rolls",
                      "type": "WEBLINK"
                    },
                    "entityType": "BANNER",
                    "accessibility": {
                      "altText": "restaurants curated for roll",
                      "altTextCta": "open"
                    },
                    "entityId": "swiggy://collectionV2?collection_id=83670&tags=layout_CCS_Rolls",
                    "frequencyCapping": {
                      
                    }
                  },
                  {
                    "id": "750217",
                    "imageId": "v1674029854/PC_Creative%20refresh/3D_bau/banners_new/Pav_Bhaji.png",
                    "action": {
                      "link": "https://www.swiggy.com/collections/80364?collection_id=80364&tags=layout_PavBhaji_Contextual&type=rcv2",
                      "text": "Pav Bhaji",
                      "type": "WEBLINK"
                    },
                    "entityType": "BANNER",
                    "accessibility": {
                      "altText": "restaurant curated for pav bhaji",
                      "altTextCta": "open"
                    },
                    "entityId": "swiggy://collectionV2?collection_id=80364&tags=layout_PavBhaji_Contextual",
                    "frequencyCapping": {
                      
                    }
                  },
                  {
                    "id": "750132",
                    "imageId": "v1674029850/PC_Creative%20refresh/3D_bau/banners_new/Dosa.png",
                    "action": {
                      "link": "https://www.swiggy.com/collections/80426?collection_id=80426&tags=layout_CCS_Dosa&type=rcv2",
                      "text": "Dosa",
                      "type": "WEBLINK"
                    },
                    "entityType": "BANNER",
                    "accessibility": {
                      "altText": "restaurants curated for dosa",
                      "altTextCta": "open"
                    },
                    "entityId": "swiggy://collectionV2?collection_id=80426&tags=layout_CCS_Dosa",
                    "frequencyCapping": {
                      
                    }
                  },
                  {
                    "id": "749761",
                    "imageId": "v1674029851/PC_Creative%20refresh/3D_bau/banners_new/Khichdi.png",
                    "action": {
                      "link": "https://www.swiggy.com/collections/80456?collection_id=80456&tags=layout_BAU_Contextual%2Ckhichdi&type=rcv2",
                      "text": "Khichdi",
                      "type": "WEBLINK"
                    },
                    "entityType": "BANNER",
                    "accessibility": {
                      "altText": "restaurants curated for khicdhi",
                      "altTextCta": "open"
                    },
                    "entityId": "80456",
                    "frequencyCapping": {
                      
                    }
                  },
                  {
                    "id": "750592",
                    "imageId": "v1675667625/PC_Creative%20refresh/Biryani_2.png",
                    "action": {
                      "link": "https://www.swiggy.com/collections/83649?collection_id=83649&tags=layout_CCS_Biryani&type=rcv2",
                      "text": "Biryani",
                      "type": "WEBLINK"
                    },
                    "entityType": "BANNER",
                    "accessibility": {
                      "altText": "restaurants curated for biryani",
                      "altTextCta": "open"
                    },
                    "entityId": "swiggy://collectionV2?collection_id=83649&tags=layout_CCS_Biryani",
                    "frequencyCapping": {
                      
                    }
                  },
                  {
                    "id": "750239",
                    "imageId": "v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Shakes.png",
                    "action": {
                      "link": "https://www.swiggy.com/collections/83674?collection_id=83674&tags=layout_CCS_Shakes&type=rcv2",
                      "text": "Shake",
                      "type": "WEBLINK"
                    },
                    "entityType": "BANNER",
                    "accessibility": {
                      "altText": "restaurant curated for shakes",
                      "altTextCta": "open"
                    },
                    "entityId": "swiggy://collectionV2?collection_id=83674&tags=layout_CCS_Shakes",
                    "frequencyCapping": {
                      
                    }
                  },
                  {
                    "id": "750123",
                    "imageId": "v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Dhokla.png",
                    "action": {
                      "link": "https://www.swiggy.com/collections/80423?collection_id=80423&tags=layout_BAU_Contextual%2Cdhokla&type=rcv2",
                      "text": "Dhokla",
                      "type": "WEBLINK"
                    },
                    "entityType": "BANNER",
                    "accessibility": {
                      "altText": "restaurants curated for dhokla",
                      "altTextCta": "open"
                    },
                    "entityId": "80423",
                    "frequencyCapping": {
                      
                    }
                  },
                  {
                    "id": "750258",
                    "imageId": "v1674029860/PC_Creative%20refresh/3D_bau/banners_new/Thepla.png",
                    "action": {
                      "link": "https://www.swiggy.com/collections/80409?collection_id=80409&tags=layout_BAU_Contextual%2Cthepla&type=rcv2",
                      "text": "Thepla",
                      "type": "WEBLINK"
                    },
                    "entityType": "BANNER",
                    "accessibility": {
                      "altText": "restaurant curated for thepla",
                      "altTextCta": "open"
                    },
                    "entityId": "80409",
                    "frequencyCapping": {
                      
                    }
                  },
                  {
                    "id": "750209",
                    "imageId": "v1674029847/PC_Creative%20refresh/3D_bau/banners_new/Pastry.png",
                    "action": {
                      "link": "https://www.swiggy.com/collections/80358?collection_id=80358&tags=layout_BAU_Contextual%2Clayout_ux4&type=rcv2",
                      "text": "Pastry",
                      "type": "WEBLINK"
                    },
                    "entityType": "BANNER",
                    "accessibility": {
                      "altText": "restaurant curated for Pastry",
                      "altTextCta": "open"
                    },
                    "entityId": "80358",
                    "frequencyCapping": {
                      
                    }
                  },
                  {
                    "id": "750640",
                    "imageId": "v1674029847/PC_Creative%20refresh/3D_bau/banners_new/Kachori.png",
                    "action": {
                      "link": "https://www.swiggy.com/collections/80450?collection_id=80450&tags=layout_BAU_Contextual%2Ckachori&type=rcv2",
                      "text": "Kachori",
                      "type": "WEBLINK"
                    },
                    "entityType": "BANNER",
                    "accessibility": {
                      "altText": "restaurant curated for kachori",
                      "altTextCta": "open"
                    },
                    "entityId": "80450",
                    "frequencyCapping": {
                      
                    }
                  },
                  {
                    "id": "749763",
                    "imageId": "v1674029844/PC_Creative%20refresh/3D_bau/banners_new/Lassi.png",
                    "action": {
                      "link": "https://www.swiggy.com/collections/80459?collection_id=80459&tags=layout_BAU_Contextual%2Classi&type=rcv2",
                      "text": "Lassi",
                      "type": "WEBLINK"
                    },
                    "entityType": "BANNER",
                    "accessibility": {
                      "altText": "restaurant curated for lassi",
                      "altTextCta": "open"
                    },
                    "entityId": "80459",
                    "frequencyCapping": {
                      
                    }
                  }
                ],
                "style": {
                  "width": {
                    "type": "TYPE_RELATIVE",
                    "value": 0.2941,
                    "reference": "RELATIVE_DIMENSION_REFERENCE_CONTAINER_WIDTH"
                  },
                  "height": {
                    "type": "TYPE_RELATIVE",
                    "value": 1.2444,
                    "reference": "RELATIVE_DIMENSION_REFERENCE_WIDTH"
                  }
                }
              }
            }
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
            "header": {
              "title": "Top restaurant chains in Ahmedabad",
              "action": {
                
              },
              "headerStyling": {
                "padding": {
                  "left": 16,
                  "top": 28,
                  "bottom": 18
                }
              }
            },
            "layout": {
              "rows": 1,
              "columns": 20,
              "horizontalScrollEnabled": true,
              "itemSpacing": 32,
              "widgetPadding": {
                
              },
              "containerStyle": {
                "containerPadding": {
                  "left": 16,
                  "right": 12,
                  "bottom": 12
                }
              },
              "scrollBar": {
                "scrollThumbColor": "#E46D47",
                "scrollTrackColor": "#02060C",
                "width": 54,
                "height": 4,
                "scrollStyling": {
                  "padding": {
                    "top": 6,
                    "bottom": 24
                  }
                }
              },
              "widgetTheme": {
                "defaultMode": {
                  "backgroundColour": "#1B3028",
                  "theme": "THEME_TYPE_DARK"
                },
                "darkMode": {
                  "backgroundColour": "#1B3028",
                  "theme": "THEME_TYPE_DARK"
                }
              }
            },
            "id": "top_brands_for_you",
            "gridElements": {
              "infoWithStyle": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.FavouriteRestaurantInfoWithStyle",
                "restaurants": [
                  {
                    "info": {
                      "id": "36981",
                      "name": "Domino's Pizza",
                      "cloudinaryImageId": "y2da5luwga8ekfbv6mab",
                      "locality": "Near Fortune Inn Haveli",
                      "areaName": "Sector 11",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Pizzas",
                        "Italian",
                        "Pastas",
                        "Desserts"
                      ],
                      "avgRating": 4,
                      "veg": true,
                      "feeDetails": {
                        "restaurantId": "36981",
                        "fees": [
                          {
                            "name": "BASE_DISTANCE",
                            "fee": 2600
                          },
                          {
                            "name": "BASE_TIME"
                          },
                          {
                            "name": "ANCILLARY_SURGE_FEE"
                          }
                        ],
                        "totalFee": 2600
                      },
                      "parentId": "2456",
                      "avgRatingString": "4.0",
                      "totalRatingsString": "1K+",
                      "sla": {
                        "deliveryTime": 25,
                        "serviceability": "SERVICEABLE",
                        "slaString": "25 mins",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2023-09-22 01:55:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹100 OFF",
                        "subHeader": "ABOVE ₹999",
                        "discountTag": "FLAT DEAL"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      }
                    },
                    "analytics": {
                      
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/restaurants/dominos-pizza-near-fortune-inn-haveli-sector-11-ahmedabad-36981",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "168122",
                      "name": "McDonald's",
                      "cloudinaryImageId": "ee5f8e06b300efc07c9fe3f4df40dfc4",
                      "locality": "SARGASAN CROSS ROAD",
                      "areaName": "GANDHINAGAR",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Burgers",
                        "Beverages",
                        "Cafe",
                        "Desserts"
                      ],
                      "avgRating": 4.1,
                      "feeDetails": {
                        "restaurantId": "168122",
                        "fees": [
                          {
                            "name": "BASE_DISTANCE",
                            "fee": 3600
                          },
                          {
                            "name": "BASE_TIME"
                          },
                          {
                            "name": "ANCILLARY_SURGE_FEE"
                          }
                        ],
                        "totalFee": 3600
                      },
                      "parentId": "630",
                      "avgRatingString": "4.1",
                      "totalRatingsString": "10K+",
                      "sla": {
                        "deliveryTime": 22,
                        "lastMileTravel": 4.6,
                        "serviceability": "SERVICEABLE",
                        "slaString": "22 mins",
                        "lastMileTravelString": "4.6 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2023-09-22 02:45:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "10% OFF",
                        "subHeader": "ABOVE ₹999",
                        "discountTag": "FLAT DEAL"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      }
                    },
                    "analytics": {
                      
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/restaurants/mcdonalds-sargasan-cross-road-gandhinagar-ahmedabad-168122",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "240796",
                      "name": "Pizza Hut",
                      "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
                      "locality": "Kudasan Road",
                      "areaName": "Gandhinagar",
                      "costForTwo": "₹600 for two",
                      "cuisines": [
                        "Pizzas"
                      ],
                      "avgRating": 3.8,
                      "feeDetails": {
                        "restaurantId": "240796",
                        "fees": [
                          {
                            "name": "BASE_DISTANCE",
                            "fee": 3600
                          },
                          {
                            "name": "BASE_TIME"
                          },
                          {
                            "name": "ANCILLARY_SURGE_FEE"
                          }
                        ],
                        "totalFee": 3600
                      },
                      "parentId": "721",
                      "avgRatingString": "3.8",
                      "totalRatingsString": "1K+",
                      "sla": {
                        "deliveryTime": 27,
                        "lastMileTravel": 4.2,
                        "serviceability": "SERVICEABLE",
                        "slaString": "27 mins",
                        "lastMileTravelString": "4.2 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2023-09-22 01:00:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "aggregatedDiscountInfoV2": {
                        
                      },
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      }
                    },
                    "analytics": {
                      
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/restaurants/pizza-hut-kudasan-road-gandhinagar-ahmedabad-240796",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "109482",
                      "name": "Mocha",
                      "cloudinaryImageId": "becb6f10a63f391672c48c16ed00e9de",
                      "locality": "Gandhinagar",
                      "areaName": "Gandhinagar",
                      "costForTwo": "₹700 for two",
                      "cuisines": [
                        "American",
                        "Italian"
                      ],
                      "avgRating": 4.1,
                      "feeDetails": {
                        "restaurantId": "109482",
                        "fees": [
                          {
                            "name": "BASE_DISTANCE",
                            "fee": 5300
                          },
                          {
                            "name": "BASE_TIME"
                          },
                          {
                            "name": "ANCILLARY_SURGE_FEE"
                          }
                        ],
                        "totalFee": 5300
                      },
                      "parentId": "5417",
                      "avgRatingString": "4.1",
                      "totalRatingsString": "1K+",
                      "sla": {
                        "deliveryTime": 30,
                        "lastMileTravel": 3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30 mins",
                        "lastMileTravelString": "3.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2023-09-21 23:15:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "newg.png",
                            "description": "Gourmet"
                          }
                        ]
                      },
                      "isOpen": true,
                      "aggregatedDiscountInfoV2": {
                        
                      },
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Gourmet",
                                  "imageId": "newg.png"
                                }
                              }
                            ]
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      }
                    },
                    "analytics": {
                      
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/restaurants/mocha-gandhinagar-ahmedabad-109482",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "76396",
                      "name": "La Pino'z Pizza",
                      "cloudinaryImageId": "ysvhwgn1iluc4j4mmvnc",
                      "locality": "Pramukh Arcade",
                      "areaName": "Kudasan",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Pizzas",
                        "Pastas",
                        "Italian",
                        "Desserts",
                        "Beverages"
                      ],
                      "avgRating": 3.9,
                      "veg": true,
                      "feeDetails": {
                        "restaurantId": "76396",
                        "fees": [
                          {
                            "name": "BASE_DISTANCE",
                            "fee": 5100
                          },
                          {
                            "name": "BASE_TIME"
                          },
                          {
                            "name": "ANCILLARY_SURGE_FEE"
                          }
                        ],
                        "totalFee": 5100
                      },
                      "parentId": "4961",
                      "avgRatingString": "3.9",
                      "totalRatingsString": "5K+",
                      "sla": {
                        "deliveryTime": 23,
                        "lastMileTravel": 3.9,
                        "serviceability": "SERVICEABLE",
                        "slaString": "23 mins",
                        "lastMileTravelString": "3.9 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2023-09-21 23:00:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹125 OFF",
                        "subHeader": "ABOVE ₹399",
                        "discountTag": "FLAT DEAL"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      }
                    },
                    "analytics": {
                      
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/restaurants/la-pinoz-pizza-pramukh-arcade-kudasan-ahmedabad-76396",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "45169",
                      "name": "Gwalia Sweets & Fast Food",
                      "cloudinaryImageId": "yeiqsiliyvt0k7arhvqf",
                      "locality": "Super Mall 2",
                      "areaName": "Infocity",
                      "costForTwo": "₹300 for two",
                      "cuisines": [
                        "Sweets",
                        "Snacks",
                        "Thalis",
                        "Desserts"
                      ],
                      "avgRating": 4,
                      "veg": true,
                      "feeDetails": {
                        "restaurantId": "45169",
                        "fees": [
                          {
                            "name": "BASE_DISTANCE",
                            "fee": 2600
                          },
                          {
                            "name": "BASE_TIME"
                          },
                          {
                            "name": "ANCILLARY_SURGE_FEE"
                          }
                        ],
                        "totalFee": 2600
                      },
                      "parentId": "92340",
                      "avgRatingString": "4.0",
                      "totalRatingsString": "1K+",
                      "sla": {
                        "deliveryTime": 16,
                        "lastMileTravel": 2.8,
                        "serviceability": "SERVICEABLE",
                        "slaString": "16 mins",
                        "lastMileTravelString": "2.8 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2023-09-21 22:30:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "aggregatedDiscountInfoV2": {
                        
                      },
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      }
                    },
                    "analytics": {
                      
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/restaurants/gwalia-sweets-and-fast-food-super-mall-2-infocity-ahmedabad-45169",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "53986",
                      "name": "Subway",
                      "cloudinaryImageId": "1ace5fa65eff3e1223feb696c956b38b",
                      "locality": "Gandhinagar",
                      "areaName": "Sector 11",
                      "costForTwo": "₹350 for two",
                      "cuisines": [
                        "Healthy Food",
                        "Salads",
                        "Snacks",
                        "Desserts",
                        "Beverages"
                      ],
                      "avgRating": 4.2,
                      "feeDetails": {
                        "restaurantId": "53986",
                        "fees": [
                          {
                            "name": "BASE_DISTANCE",
                            "fee": 2600
                          },
                          {
                            "name": "BASE_TIME"
                          },
                          {
                            "name": "ANCILLARY_SURGE_FEE"
                          }
                        ],
                        "totalFee": 2600
                      },
                      "parentId": "2",
                      "avgRatingString": "4.2",
                      "totalRatingsString": "5K+",
                      "sla": {
                        "deliveryTime": 17,
                        "lastMileTravel": 2.1,
                        "serviceability": "SERVICEABLE",
                        "slaString": "17 mins",
                        "lastMileTravelString": "2.1 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2023-09-21 22:14:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "aggregatedDiscountInfoV2": {
                        
                      },
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      }
                    },
                    "analytics": {
                      
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/restaurants/subway-gandhinagar-sector-11-ahmedabad-53986",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "45527",
                      "name": "Faasos - Wraps & Rolls",
                      "cloudinaryImageId": "af33b81798b11deba338e94b7585d348",
                      "locality": "Near Aashka Multispeciality Hospital",
                      "areaName": "Gandhinagar",
                      "costForTwo": "₹200 for two",
                      "cuisines": [
                        "Kebabs",
                        "Fast Food",
                        "Snacks",
                        "North Indian",
                        "American",
                        "Healthy Food",
                        "Desserts",
                        "Beverages"
                      ],
                      "avgRating": 4.1,
                      "feeDetails": {
                        "restaurantId": "45527",
                        "fees": [
                          {
                            "name": "BASE_DISTANCE",
                            "fee": 4800
                          },
                          {
                            "name": "BASE_TIME"
                          },
                          {
                            "name": "ANCILLARY_SURGE_FEE"
                          }
                        ],
                        "totalFee": 4800
                      },
                      "parentId": "21809",
                      "avgRatingString": "4.1",
                      "totalRatingsString": "10K+",
                      "sla": {
                        "deliveryTime": 26,
                        "lastMileTravel": 5,
                        "serviceability": "SERVICEABLE",
                        "slaString": "26 mins",
                        "lastMileTravelString": "5.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2023-09-21 23:59:00",
                        "opened": true
                      },
                      "badges": {
                        "textExtendedBadges": [
                          {
                            "iconId": "guiltfree/GF_Logo_android_3x",
                            "shortDescription": "options available",
                            "fontColor": "#7E808C"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "",
                                  "fontColor": "#7E808C",
                                  "iconId": "guiltfree/GF_Logo_android_3x",
                                  "shortDescription": "options available"
                                }
                              }
                            ]
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "40% OFF",
                        "subHeader": "UPTO ₹80"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      }
                    },
                    "analytics": {
                      
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/restaurants/faasos-wraps-and-rolls-near-aashka-multispeciality-hospital-gandhinagar-ahmedabad-45527",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "435646",
                      "name": "La Milano Pizzeria",
                      "cloudinaryImageId": "v3kyjrbus7ztedlceds4",
                      "locality": "Skyline Building Sector 11",
                      "areaName": "Gandhinagar",
                      "costForTwo": "₹199 for two",
                      "cuisines": [
                        "Pizzas",
                        "Pastas",
                        "Desserts"
                      ],
                      "avgRating": 3.8,
                      "veg": true,
                      "feeDetails": {
                        "restaurantId": "435646",
                        "fees": [
                          {
                            "name": "BASE_DISTANCE",
                            "fee": 2600
                          },
                          {
                            "name": "BASE_TIME"
                          },
                          {
                            "name": "ANCILLARY_SURGE_FEE"
                          }
                        ],
                        "totalFee": 2600
                      },
                      "parentId": "22533",
                      "avgRatingString": "3.8",
                      "totalRatingsString": "1K+",
                      "sla": {
                        "deliveryTime": 20,
                        "lastMileTravel": 2.1,
                        "serviceability": "SERVICEABLE",
                        "slaString": "20 mins",
                        "lastMileTravelString": "2.1 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2023-09-21 23:00:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "50% OFF",
                        "subHeader": "UPTO ₹100"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      }
                    },
                    "analytics": {
                      
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/restaurants/la-milano-pizzeria-skyline-building-sector-11-gandhinagar-ahmedabad-435646",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "44497",
                      "name": "The Belgian Waffle Co.",
                      "cloudinaryImageId": "8cb220fa3997a3b928d2ffb6c098acaf",
                      "locality": "Service Road",
                      "areaName": "Infocity",
                      "costForTwo": "₹200 for two",
                      "cuisines": [
                        "Waffle",
                        "Desserts",
                        "Ice Cream",
                        "Beverages"
                      ],
                      "avgRating": 4.3,
                      "veg": true,
                      "feeDetails": {
                        "restaurantId": "44497",
                        "fees": [
                          {
                            "name": "BASE_DISTANCE",
                            "fee": 3100
                          },
                          {
                            "name": "BASE_TIME"
                          },
                          {
                            "name": "ANCILLARY_SURGE_FEE"
                          }
                        ],
                        "totalFee": 3100
                      },
                      "parentId": "2233",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "5K+",
                      "sla": {
                        "deliveryTime": 23,
                        "lastMileTravel": 3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "23 mins",
                        "lastMileTravelString": "3.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2023-09-21 23:59:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "20% OFF",
                        "subHeader": "UPTO ₹50"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      }
                    },
                    "analytics": {
                      
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/restaurants/the-belgian-waffle-co-service-road-infocity-ahmedabad-44497",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "45084",
                      "name": "Momoman",
                      "cloudinaryImageId": "rt4pqbfjjsuf4lljbmyp",
                      "locality": "Idroda Circle",
                      "areaName": "Infocity",
                      "costForTwo": "₹250 for two",
                      "cuisines": [
                        "Chinese"
                      ],
                      "avgRating": 3.9,
                      "feeDetails": {
                        "restaurantId": "45084",
                        "fees": [
                          {
                            "name": "BASE_DISTANCE",
                            "fee": 2600
                          },
                          {
                            "name": "BASE_TIME"
                          },
                          {
                            "name": "ANCILLARY_SURGE_FEE"
                          }
                        ],
                        "totalFee": 2600
                      },
                      "parentId": "4416",
                      "avgRatingString": "3.9",
                      "totalRatingsString": "1K+",
                      "sla": {
                        "deliveryTime": 21,
                        "lastMileTravel": 2.9,
                        "serviceability": "SERVICEABLE",
                        "slaString": "21 mins",
                        "lastMileTravelString": "2.9 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2023-09-22 02:45:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "60% OFF",
                        "subHeader": "UPTO ₹120"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      }
                    },
                    "analytics": {
                      
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/restaurants/momoman-idroda-circle-infocity-ahmedabad-45084",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "45529",
                      "name": "Oven Story Pizza - Standout Toppings",
                      "cloudinaryImageId": "ab979bffbd658e74de650a15ca0092a3",
                      "locality": "Near Aashka Multispeciality Hospital",
                      "areaName": "Gandhinagar",
                      "costForTwo": "₹200 for two",
                      "cuisines": [
                        "Pizzas",
                        "Pastas",
                        "Italian",
                        "Desserts",
                        "Beverages"
                      ],
                      "avgRating": 4.1,
                      "feeDetails": {
                        "restaurantId": "45529",
                        "fees": [
                          {
                            "name": "BASE_DISTANCE",
                            "fee": 4800
                          },
                          {
                            "name": "BASE_TIME"
                          },
                          {
                            "name": "ANCILLARY_SURGE_FEE"
                          }
                        ],
                        "totalFee": 4800
                      },
                      "parentId": "3534",
                      "avgRatingString": "4.1",
                      "totalRatingsString": "1K+",
                      "sla": {
                        "deliveryTime": 26,
                        "lastMileTravel": 5,
                        "serviceability": "SERVICEABLE",
                        "slaString": "23-29 mins",
                        "lastMileTravelString": "5.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2023-09-21 23:59:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹125 OFF",
                        "subHeader": "ABOVE ₹1099",
                        "discountTag": "FLAT DEAL"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      }
                    },
                    "analytics": {
                      
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/restaurants/oven-story-pizza-standout-toppings-near-aashka-multispeciality-hospital-gandhinagar-ahmedabad-45529",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "395364",
                      "name": "McDonald's Gourmet Burger Collection",
                      "cloudinaryImageId": "jqb5ktjknm4dxggyylfb",
                      "locality": "GANDHINAGAR, SARGASAN CROSS ROAD",
                      "areaName": "Gandhinagar",
                      "costForTwo": "₹500 for two",
                      "cuisines": [
                        "Burgers",
                        "Beverages",
                        "Cafe",
                        "Desserts"
                      ],
                      "avgRating": 4.1,
                      "feeDetails": {
                        "restaurantId": "395364",
                        "fees": [
                          {
                            "name": "BASE_DISTANCE",
                            "fee": 5800
                          },
                          {
                            "name": "BASE_TIME"
                          },
                          {
                            "name": "ANCILLARY_SURGE_FEE"
                          }
                        ],
                        "totalFee": 5800
                      },
                      "parentId": "10761",
                      "avgRatingString": "4.1",
                      "totalRatingsString": "100+",
                      "sla": {
                        "deliveryTime": 26,
                        "lastMileTravel": 4.6,
                        "serviceability": "SERVICEABLE",
                        "slaString": "26 mins",
                        "lastMileTravelString": "4.6 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2023-09-22 02:45:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "aggregatedDiscountInfoV2": {
                        
                      },
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      }
                    },
                    "analytics": {
                      
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/restaurants/mcdonalds-gourmet-burger-collection-sargasan-cross-road-gandhinagar-ahmedabad-395364",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "378603",
                      "name": "Baskin Robbins - Ice Cream Desserts",
                      "cloudinaryImageId": "85ccae4e3576f9330af102c46ca85395",
                      "locality": "Gandhinagar",
                      "areaName": "Airport Gandhinagar Highway",
                      "costForTwo": "₹250 for two",
                      "cuisines": [
                        "Desserts",
                        "Ice Cream"
                      ],
                      "avgRating": 4.2,
                      "veg": true,
                      "feeDetails": {
                        "restaurantId": "378603",
                        "fees": [
                          {
                            "name": "BASE_DISTANCE",
                            "fee": 3600
                          },
                          {
                            "name": "BASE_TIME"
                          },
                          {
                            "name": "ANCILLARY_SURGE_FEE"
                          }
                        ],
                        "totalFee": 3600
                      },
                      "parentId": "5588",
                      "avgRatingString": "4.2",
                      "totalRatingsString": "100+",
                      "sla": {
                        "deliveryTime": 24,
                        "lastMileTravel": 4.9,
                        "serviceability": "SERVICEABLE",
                        "slaString": "24 mins",
                        "lastMileTravelString": "4.9 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2023-09-21 23:59:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "10% OFF",
                        "subHeader": "ABOVE ₹1000",
                        "discountTag": "FLAT DEAL"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      }
                    },
                    "analytics": {
                      
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/restaurants/baskin-robbins-ice-cream-desserts-gandhinagar-airport-gandhinagar-highway-ahmedabad-378603",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "62992",
                      "name": "LunchBox - Meals and Thalis",
                      "cloudinaryImageId": "ywvtndu8hk3mblk14l6q",
                      "locality": "Near Aashka Multispeciality Hospital",
                      "areaName": "Gandhinagar",
                      "costForTwo": "₹200 for two",
                      "cuisines": [
                        "Biryani",
                        "North Indian",
                        "Punjabi",
                        "Healthy Food",
                        "Desserts",
                        "Beverages"
                      ],
                      "avgRating": 4,
                      "feeDetails": {
                        "restaurantId": "62992",
                        "fees": [
                          {
                            "name": "BASE_DISTANCE",
                            "fee": 4800
                          },
                          {
                            "name": "BASE_TIME"
                          },
                          {
                            "name": "ANCILLARY_SURGE_FEE"
                          }
                        ],
                        "totalFee": 4800
                      },
                      "parentId": "4925",
                      "avgRatingString": "4.0",
                      "totalRatingsString": "10K+",
                      "sla": {
                        "deliveryTime": 25,
                        "lastMileTravel": 5,
                        "serviceability": "SERVICEABLE",
                        "slaString": "25 mins",
                        "lastMileTravelString": "5.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2023-09-21 23:59:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹100 OFF",
                        "subHeader": "ABOVE ₹399",
                        "discountTag": "FLAT DEAL"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      }
                    },
                    "analytics": {
                      
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/restaurants/lunchbox-meals-and-thalis-near-aashka-multispeciality-hospital-gandhinagar-ahmedabad-62992",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "45528",
                      "name": "Behrouz Biryani",
                      "cloudinaryImageId": "89fccaa76f2f760e2742b9e53d32bb69",
                      "locality": "Near Aashka Multispeciality Hospital",
                      "areaName": "Gandhinagar",
                      "costForTwo": "₹200 for two",
                      "cuisines": [
                        "Biryani",
                        "Mughlai",
                        "North Indian",
                        "Lucknowi",
                        "Hyderabadi",
                        "Kebabs",
                        "Desserts",
                        "Beverages"
                      ],
                      "avgRating": 4.3,
                      "feeDetails": {
                        "restaurantId": "45528",
                        "fees": [
                          {
                            "name": "BASE_DISTANCE",
                            "fee": 7000
                          },
                          {
                            "name": "BASE_TIME"
                          },
                          {
                            "name": "ANCILLARY_SURGE_FEE"
                          }
                        ],
                        "totalFee": 7000
                      },
                      "parentId": "1803",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "5K+",
                      "sla": {
                        "deliveryTime": 24,
                        "lastMileTravel": 5,
                        "serviceability": "SERVICEABLE",
                        "slaString": "24 mins",
                        "lastMileTravelString": "5.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2023-09-21 23:59:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "aggregatedDiscountInfoV2": {
                        
                      },
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      }
                    },
                    "analytics": {
                      
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/restaurants/behrouz-biryani-near-aashka-multispeciality-hospital-gandhinagar-ahmedabad-45528",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "45530",
                      "name": "Sweet Truth - Cake and Desserts",
                      "cloudinaryImageId": "4a3b48488e3aa9bda13efd8cfcd95284",
                      "locality": "Near Aashka Multispeciality Hospital",
                      "areaName": "Gandhinagar",
                      "costForTwo": "₹200 for two",
                      "cuisines": [
                        "Snacks",
                        "Bakery",
                        "Desserts",
                        "Beverages"
                      ],
                      "avgRating": 4.4,
                      "feeDetails": {
                        "restaurantId": "45530",
                        "fees": [
                          {
                            "name": "BASE_DISTANCE",
                            "fee": 4800
                          },
                          {
                            "name": "BASE_TIME"
                          },
                          {
                            "name": "ANCILLARY_SURGE_FEE"
                          }
                        ],
                        "totalFee": 4800
                      },
                      "parentId": "4444",
                      "avgRatingString": "4.4",
                      "totalRatingsString": "1K+",
                      "sla": {
                        "deliveryTime": 22,
                        "lastMileTravel": 5,
                        "serviceability": "SERVICEABLE",
                        "slaString": "22 mins",
                        "lastMileTravelString": "5.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2023-09-21 23:59:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "aggregatedDiscountInfoV2": {
                        
                      },
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      }
                    },
                    "analytics": {
                      
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/restaurants/sweet-truth-cake-and-desserts-near-aashka-multispeciality-hospital-gandhinagar-ahmedabad-45530",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "45531",
                      "name": "Firangi Bake",
                      "cloudinaryImageId": "kgrpy3glrc3nomrq9yez",
                      "locality": "Near Aashka Multispeciality Hospital",
                      "areaName": "Gandhinagar",
                      "costForTwo": "₹200 for two",
                      "cuisines": [
                        "Pizzas",
                        "Pastas",
                        "Italian",
                        "Mexican",
                        "Healthy Food",
                        "Desserts",
                        "Beverages"
                      ],
                      "avgRating": 3.8,
                      "feeDetails": {
                        "restaurantId": "45531",
                        "fees": [
                          {
                            "name": "BASE_DISTANCE",
                            "fee": 4800
                          },
                          {
                            "name": "BASE_TIME"
                          },
                          {
                            "name": "ANCILLARY_SURGE_FEE"
                          }
                        ],
                        "totalFee": 4800
                      },
                      "parentId": "3952",
                      "avgRatingString": "3.8",
                      "totalRatingsString": "1K+",
                      "sla": {
                        "deliveryTime": 27,
                        "lastMileTravel": 5,
                        "serviceability": "SERVICEABLE",
                        "slaString": "27 mins",
                        "lastMileTravelString": "5.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2023-09-21 23:59:00",
                        "opened": true
                      },
                      "badges": {
                        "textExtendedBadges": [
                          {
                            "iconId": "guiltfree/GF_Logo_android_3x",
                            "shortDescription": "options available",
                            "fontColor": "#7E808C"
                          }
                        ]
                      },
                      "isOpen": true,
                      "aggregatedDiscountInfoV2": {
                        
                      },
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "",
                                  "fontColor": "#7E808C",
                                  "iconId": "guiltfree/GF_Logo_android_3x",
                                  "shortDescription": "options available"
                                }
                              }
                            ]
                          }
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      }
                    },
                    "analytics": {
                      
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/restaurants/firangi-bake-near-aashka-multispeciality-hospital-gandhinagar-ahmedabad-45531",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "156086",
                      "name": "The Good Bowl",
                      "cloudinaryImageId": "0b3356a88b6fc5966c452c4c9b1b5e4a",
                      "locality": "Near Aashka Multispeciality Hospital",
                      "areaName": "Gandhinagar",
                      "costForTwo": "₹200 for two",
                      "cuisines": [
                        "Biryani",
                        "North Indian",
                        "Pastas",
                        "Punjabi",
                        "Desserts",
                        "Beverages"
                      ],
                      "avgRating": 4.1,
                      "feeDetails": {
                        "restaurantId": "156086",
                        "fees": [
                          {
                            "name": "BASE_DISTANCE",
                            "fee": 4800
                          },
                          {
                            "name": "BASE_TIME"
                          },
                          {
                            "name": "ANCILLARY_SURGE_FEE"
                          }
                        ],
                        "totalFee": 4800
                      },
                      "parentId": "7918",
                      "avgRatingString": "4.1",
                      "totalRatingsString": "1K+",
                      "sla": {
                        "deliveryTime": 24,
                        "lastMileTravel": 5,
                        "serviceability": "SERVICEABLE",
                        "slaString": "24 mins",
                        "lastMileTravelString": "5.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2023-09-21 23:59:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "40% OFF",
                        "subHeader": "UPTO ₹80"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      }
                    },
                    "analytics": {
                      
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/restaurants/the-good-bowl-near-aashka-multispeciality-hospital-gandhinagar-ahmedabad-156086",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "204627",
                      "name": "The Shake Maker",
                      "cloudinaryImageId": "ryimu6vojdgofeqb1s1j",
                      "locality": "Gandhinagar",
                      "areaName": "Gandhinagar",
                      "costForTwo": "₹250 for two",
                      "cuisines": [
                        "Beverages"
                      ],
                      "avgRating": 4.3,
                      "feeDetails": {
                        "restaurantId": "204627",
                        "fees": [
                          {
                            "name": "BASE_DISTANCE",
                            "fee": 3600
                          },
                          {
                            "name": "BASE_TIME"
                          },
                          {
                            "name": "ANCILLARY_SURGE_FEE"
                          }
                        ],
                        "totalFee": 3600
                      },
                      "parentId": "5303",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "500+",
                      "sla": {
                        "deliveryTime": 18,
                        "lastMileTravel": 4,
                        "serviceability": "SERVICEABLE",
                        "slaString": "18 mins",
                        "lastMileTravelString": "4.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2023-09-21 23:30:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "aggregatedDiscountInfoV2": {
                        
                      },
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      }
                    },
                    "analytics": {
                      
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/restaurants/the-shake-maker-gandhinagar-ahmedabad-204627",
                      "type": "WEBLINK"
                    }
                  }
                ],
                "theme": "Restaurant_Group_WebView_SEO_PB_Theme",
                "widgetType": "WIDGET_TYPE_POPULAR_BRANDS",
                "style": {
                  "width": {
                    "type": "TYPE_RELATIVE",
                    "value": 0.41111112,
                    "reference": "RELATIVE_DIMENSION_REFERENCE_DEVICE_WIDTH"
                  },
                  "height": {
                    "type": "TYPE_RELATIVE",
                    "value": 0.7027027,
                    "reference": "RELATIVE_DIMENSION_REFERENCE_WIDTH"
                  },
                  "layoutAlignment": "LAYOUT_ALIGNMENT_LEFT"
                },
                "collectionId": "84124"
              }
            }
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.seo.widgets.v1.BasicContent",
            "title": "Restaurants with online food delivery in Ahmedabad",
            "id": "popular_restaurants_title"
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.InlineViewFilterSortWidget",
            "sortConfigs": [
              {
                "key": "relevance",
                "title": "Relevance (Default)",
                "selected": true,
                "defaultSelection": true
              },
              {
                "key": "deliveryTimeAsc",
                "title": "Delivery Time"
              },
              {
                "key": "modelBasedRatingDesc",
                "title": "Rating"
              },
              {
                "key": "costForTwoAsc",
                "title": "Cost: Low to High"
              },
              {
                "key": "costForTwoDesc",
                "title": "Cost: High to Low"
              }
            ],
            "restaurantCount": 261,
            "facetList": [
              {
                "label": "Delivery Time",
                "id": "deliveryTime",
                "selection": "SELECT_TYPE_MULTISELECT",
                "facetInfo": [
                  {
                    "label": "Fast Delivery",
                    "id": "deliveryTimefacetquery1",
                    "analytics": {
                      
                    },
                    "openFilter": true
                  }
                ],
                "viewType": "VIEW_TYPE_HALF_CARD",
                "subLabel": "Filter by"
              },
              {
                "label": "Cuisines",
                "id": "catalog_cuisines",
                "selection": "SELECT_TYPE_MULTISELECT",
                "facetInfo": [
                  {
                    "label": "Afghani",
                    "id": "query_afghani",
                    "analytics": {
                      
                    },
                    "openFilter": true
                  },
                  {
                    "label": "American",
                    "id": "query_american",
                    "analytics": {
                      
                    },
                    "openFilter": true
                  },
                  {
                    "label": "Arabian",
                    "id": "query_arabian",
                    "analytics": {
                      
                    },
                    "openFilter": true
                  },
                  {
                    "label": "Bakery",
                    "id": "query_bakery",
                    "analytics": {
                      
                    },
                    "openFilter": true
                  },
                  {
                    "label": "Bengali",
                    "id": "query_bengali",
                    "analytics": {
                      
                    },
                    "openFilter": true
                  },
                  {
                    "label": "Beverages",
                    "id": "query_beverages",
                    "analytics": {
                      
                    },
                    "openFilter": true
                  },
                  {
                    "label": "Biryani",
                    "id": "query_biryani",
                    "analytics": {
                      
                    },
                    "openFilter": true
                  },
                  {
                    "label": "Burgers",
                    "id": "query_burgers",
                    "analytics": {
                      
                    },
                    "openFilter": true
                  },
                  {
                    "label": "Cafe",
                    "id": "query_cafe",
                    "analytics": {
                      
                    },
                    "openFilter": true
                  },
                  {
                    "label": "Chaat",
                    "id": "query_chaat",
                    "analytics": {
                      
                    },
                    "openFilter": true
                  },
                  {
                    "label": "Chinese",
                    "id": "query_chinese",
                    "analytics": {
                      
                    },
                    "openFilter": true
                  },
                  {
                    "label": "Combo",
                    "id": "query_combo",
                    "analytics": {
                      
                    },
                    "openFilter": true
                  },
                  {
                    "label": "Continental",
                    "id": "query_continental",
                    "analytics": {
                      
                    },
                    "openFilter": true
                  },
                  {
                    "label": "Desserts",
                    "id": "query_desserts",
                    "analytics": {
                      
                    },
                    "openFilter": true
                  },
                  {
                    "label": "Fast Food",
                    "id": "query_fast_food",
                    "analytics": {
                      
                    },
                    "openFilter": true
                  },
                  {
                    "label": "Greek",
                    "id": "query_greek",
                    "analytics": {
                      
                    },
                    "openFilter": true
                  },
                  {
                    "label": "Gujarati",
                    "id": "query_gujarati",
                    "analytics": {
                      
                    },
                    "openFilter": true
                  },
                  {
                    "label": "Healthy Food",
                    "id": "query_healthy_food",
                    "analytics": {
                      
                    },
                    "openFilter": true
                  },
                  {
                    "label": "Home Food",
                    "id": "query_home_food",
                    "analytics": {
                      
                    },
                    "openFilter": true
                  },
                  {
                    "label": "Hyderabadi",
                    "id": "query_hyderabadi",
                    "analytics": {
                      
                    },
                    "openFilter": true
                  },
                  {
                    "label": "Ice Cream",
                    "id": "query_ice_cream",
                    "analytics": {
                      
                    },
                    "openFilter": true
                  },
                  {
                    "label": "Ice Cream Cakes",
                    "id": "query_ice_cream_cakes",
                    "analytics": {
                      
                    },
                    "openFilter": true
                  },
                  {
                    "label": "Indian",
                    "id": "query_indian",
                    "analytics": {
                      
                    },
                    "openFilter": true
                  },
                  {
                    "label": "Italian",
                    "id": "query_italian",
                    "analytics": {
                      
                    },
                    "openFilter": true
                  },
                  {
                    "label": "Italian-American",
                    "id": "query_italian-american",
                    "analytics": {
                      
                    },
                    "openFilter": true
                  },
                  {
                    "label": "Jain",
                    "id": "query_jain",
                    "analytics": {
                      
                    },
                    "openFilter": true
                  },
                  {
                    "label": "Japanese",
                    "id": "query_japanese",
                    "analytics": {
                      
                    },
                    "openFilter": true
                  },
                  {
                    "label": "Juices",
                    "id": "query_juices",
                    "analytics": {
                      
                    },
                    "openFilter": true
                  },
                  {
                    "label": "Kebabs",
                    "id": "query_kebabs",
                    "analytics": {
                      
                    },
                    "openFilter": true
                  },
                  {
                    "label": "Lebanese",
                    "id": "query_lebanese",
                    "analytics": {
                      
                    },
                    "openFilter": true
                  },
                  {
                    "label": "Lucknowi",
                    "id": "query_lucknowi",
                    "analytics": {
                      
                    },
                    "openFilter": true
                  },
                  {
                    "label": "Maharashtrian",
                    "id": "query_maharashtrian",
                    "analytics": {
                      
                    },
                    "openFilter": true
                  },
                  {
                    "label": "Mediterranean",
                    "id": "query_mediterranean",
                    "analytics": {
                      
                    },
                    "openFilter": true
                  },
                  {
                    "label": "Mexican",
                    "id": "query_mexican",
                    "analytics": {
                      
                    },
                    "openFilter": true
                  },
                  {
                    "label": "Middle Eastern",
                    "id": "query_middle_eastern",
                    "analytics": {
                      
                    },
                    "openFilter": true
                  },
                  {
                    "label": "Mughlai",
                    "id": "query_mughlai",
                    "analytics": {
                      
                    },
                    "openFilter": true
                  },
                  {
                    "label": "North Indian",
                    "id": "query_north_indian",
                    "analytics": {
                      
                    },
                    "openFilter": true
                  },
                  {
                    "label": "Parsi",
                    "id": "query_parsi",
                    "analytics": {
                      
                    },
                    "openFilter": true
                  },
                  {
                    "label": "Pastas",
                    "id": "query_pastas",
                    "analytics": {
                      
                    },
                    "openFilter": true
                  },
                  {
                    "label": "Pizzas",
                    "id": "query_pizzas",
                    "analytics": {
                      
                    },
                    "openFilter": true
                  },
                  {
                    "label": "Punjabi",
                    "id": "query_punjabi",
                    "analytics": {
                      
                    },
                    "openFilter": true
                  },
                  {
                    "label": "Rajasthani",
                    "id": "query_rajasthani",
                    "analytics": {
                      
                    },
                    "openFilter": true
                  },
                  {
                    "label": "Rolls & Wraps",
                    "id": "query_rolls_&_wraps",
                    "analytics": {
                      
                    },
                    "openFilter": true
                  },
                  {
                    "label": "Salads",
                    "id": "query_salads",
                    "analytics": {
                      
                    },
                    "openFilter": true
                  },
                  {
                    "label": "Seafood",
                    "id": "query_seafood",
                    "analytics": {
                      
                    },
                    "openFilter": true
                  },
                  {
                    "label": "Snacks",
                    "id": "query_snacks",
                    "analytics": {
                      
                    },
                    "openFilter": true
                  },
                  {
                    "label": "South Indian",
                    "id": "query_south_indian",
                    "analytics": {
                      
                    },
                    "openFilter": true
                  },
                  {
                    "label": "Street Food",
                    "id": "query_street_food",
                    "analytics": {
                      
                    },
                    "openFilter": true
                  },
                  {
                    "label": "Sweets",
                    "id": "query_sweets",
                    "analytics": {
                      
                    },
                    "openFilter": true
                  },
                  {
                    "label": "Tandoor",
                    "id": "query_tandoor",
                    "analytics": {
                      
                    },
                    "openFilter": true
                  },
                  {
                    "label": "Thalis",
                    "id": "query_thalis",
                    "analytics": {
                      
                    },
                    "openFilter": true
                  },
                  {
                    "label": "Turkish",
                    "id": "query_turkish",
                    "analytics": {
                      
                    },
                    "openFilter": true
                  },
                  {
                    "label": "Waffle",
                    "id": "query_waffle",
                    "analytics": {
                      
                    },
                    "openFilter": true
                  }
                ],
                "viewType": "VIEW_TYPE_HALF_CARD",
                "canSearch": true,
                "subLabel": "Filter by cuisine",
                "openFilter": true
              },
              {
                "label": "Explore",
                "id": "explore",
                "selection": "SELECT_TYPE_MULTISELECT",
                "facetInfo": [
                  {
                    "label": "New on Swiggy",
                    "id": "newfacetquery1",
                    "analytics": {
                      
                    },
                    "openFilter": true
                  },
                  {
                    "label": "Swiggy Exclusives",
                    "id": "isExclusivefacetquery1",
                    "analytics": {
                      
                    }
                  }
                ],
                "viewType": "VIEW_TYPE_HALF_CARD"
              },
              {
                "label": "Ratings",
                "id": "rating",
                "selection": "SELECT_TYPE_MULTISELECT",
                "facetInfo": [
                  {
                    "label": "Ratings 4.5+",
                    "id": "ratingfacetquery3",
                    "analytics": {
                      
                    }
                  },
                  {
                    "label": "Ratings 4.0+",
                    "id": "ratingfacetquery4",
                    "analytics": {
                      
                    },
                    "openFilter": true
                  },
                  {
                    "label": "Ratings 3.5+",
                    "id": "ratingfacetquery5",
                    "analytics": {
                      
                    }
                  }
                ],
                "viewType": "VIEW_TYPE_HALF_CARD",
                "subLabel": "Filter by"
              },
              {
                "label": "Veg/Non-Veg",
                "id": "isVeg",
                "selection": "SELECT_TYPE_SINGLESELECT",
                "facetInfo": [
                  {
                    "label": "Pure Veg",
                    "id": "isVegfacetquery2",
                    "analytics": {
                      
                    },
                    "openFilter": true
                  },
                  {
                    "label": "Non Veg",
                    "id": "isVegfacetquery3",
                    "analytics": {
                      
                    }
                  }
                ],
                "viewType": "VIEW_TYPE_FLATTENED",
                "subLabel": "Filter by"
              },
              {
                "label": "Offers",
                "id": "restaurantOfferMultiTd",
                "selection": "SELECT_TYPE_SINGLESELECT",
                "facetInfo": [
                  {
                    "label": "Offers",
                    "id": "restaurantOfferMultiTdfacetquery3",
                    "analytics": {
                      
                    },
                    "openFilter": true
                  }
                ],
                "viewType": "VIEW_TYPE_FLATTENED",
                "subLabel": "Restaurants with"
              },
              {
                "label": "Cost for two",
                "id": "costForTwo",
                "selection": "SELECT_TYPE_MULTISELECT",
                "facetInfo": [
                  {
                    "label": "Rs. 300-Rs. 600",
                    "id": "costForTwofacetquery3",
                    "analytics": {
                      
                    },
                    "openFilter": true
                  },
                  {
                    "label": "Greater than Rs. 600",
                    "id": "costForTwofacetquery4",
                    "analytics": {
                      
                    }
                  },
                  {
                    "label": "Less than Rs. 300",
                    "id": "costForTwofacetquery5",
                    "analytics": {
                      
                    },
                    "openFilter": true
                  }
                ],
                "viewType": "VIEW_TYPE_HALF_CARD",
                "subLabel": "Filter by"
              }
            ]
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
            "layout": {
              "columns": 4
            },
            "id": "restaurant_grid_listing",
            "gridElements": {
              "infoWithStyle": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.FavouriteRestaurantInfoWithStyle",
                "restaurants": [
                  {
                    "info": {
                      "id": "36981",
                      "name": "Domino's Pizza",
                      "cloudinaryImageId": "y2da5luwga8ekfbv6mab",
                      "locality": "Near Fortune Inn Haveli",
                      "areaName": "Sector 11",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Pizzas",
                        "Italian",
                        "Pastas",
                        "Desserts"
                      ],
                      "avgRating": 4,
                      "veg": true,
                      "feeDetails": {
                        "restaurantId": "36981",
                        "fees": [
                          {
                            "name": "BASE_DISTANCE",
                            "fee": 2600
                          },
                          {
                            "name": "BASE_TIME"
                          },
                          {
                            "name": "ANCILLARY_SURGE_FEE"
                          }
                        ],
                        "totalFee": 2600
                      },
                      "parentId": "2456",
                      "avgRatingString": "4.0",
                      "totalRatingsString": "1K+",
                      "sla": {
                        "deliveryTime": 25,
                        "serviceability": "SERVICEABLE",
                        "slaString": "25 mins",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2023-09-22 01:55:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹100 OFF",
                        "subHeader": "ABOVE ₹999",
                        "discountTag": "FLAT DEAL"
                      },
                      "orderabilityCommunication": {
                        "title": {
                          
                        },
                        "subTitle": {
                          
                        },
                        "message": {
                          
                        },
                        "customIcon": {
                          
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      }
                    },
                    "analytics": {
                      "context": "seo-data-afce66f9-fd2f-473a-b304-91af265614ea"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/restaurants/dominos-pizza-near-fortune-inn-haveli-sector-11-ahmedabad-36981",
                      "text": "RESTAURANT_MENU",
                      "type": "WEBLINK"
                    },
                    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                  },
                  {
                    "info": {
                      "id": "168122",
                      "name": "McDonald's",
                      "cloudinaryImageId": "ee5f8e06b300efc07c9fe3f4df40dfc4",
                      "locality": "SARGASAN CROSS ROAD",
                      "areaName": "GANDHINAGAR",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Burgers",
                        "Beverages",
                        "Cafe",
                        "Desserts"
                      ],
                      "avgRating": 4.1,
                      "feeDetails": {
                        "restaurantId": "168122",
                        "fees": [
                          {
                            "name": "BASE_DISTANCE",
                            "fee": 3600
                          },
                          {
                            "name": "BASE_TIME"
                          },
                          {
                            "name": "ANCILLARY_SURGE_FEE"
                          }
                        ],
                        "totalFee": 3600
                      },
                      "parentId": "630",
                      "avgRatingString": "4.1",
                      "totalRatingsString": "10K+",
                      "sla": {
                        "deliveryTime": 22,
                        "lastMileTravel": 4.6,
                        "serviceability": "SERVICEABLE",
                        "slaString": "22 mins",
                        "lastMileTravelString": "4.6 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2023-09-22 02:45:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "10% OFF",
                        "subHeader": "ABOVE ₹999",
                        "discountTag": "FLAT DEAL"
                      },
                      "orderabilityCommunication": {
                        "title": {
                          
                        },
                        "subTitle": {
                          
                        },
                        "message": {
                          
                        },
                        "customIcon": {
                          
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      }
                    },
                    "analytics": {
                      "context": "seo-data-afce66f9-fd2f-473a-b304-91af265614ea"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/restaurants/mcdonalds-sargasan-cross-road-gandhinagar-ahmedabad-168122",
                      "text": "RESTAURANT_MENU",
                      "type": "WEBLINK"
                    },
                    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                  },
                  {
                    "info": {
                      "id": "565280",
                      "name": "Wendy's Burgers",
                      "cloudinaryImageId": "f1aa621021a2826088089b89842d4e7c",
                      "locality": "Near Aashka Multispeciality Hospital",
                      "areaName": "Gandhinagar",
                      "costForTwo": "₹200 for two",
                      "cuisines": [
                        "Burgers",
                        "American",
                        "Fast Food",
                        "Snacks",
                        "Beverages"
                      ],
                      "avgRating": 4.1,
                      "feeDetails": {
                        "restaurantId": "565280",
                        "fees": [
                          {
                            "name": "BASE_DISTANCE",
                            "fee": 4800
                          },
                          {
                            "name": "BASE_TIME"
                          },
                          {
                            "name": "ANCILLARY_SURGE_FEE"
                          }
                        ],
                        "totalFee": 4800
                      },
                      "parentId": "972",
                      "avgRatingString": "4.1",
                      "totalRatingsString": "500+",
                      "sla": {
                        "deliveryTime": 26,
                        "lastMileTravel": 5,
                        "serviceability": "SERVICEABLE",
                        "slaString": "26 mins",
                        "lastMileTravelString": "5.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2023-09-21 23:59:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "aggregatedDiscountInfoV2": {
                        
                      },
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "orderabilityCommunication": {
                        "title": {
                          
                        },
                        "subTitle": {
                          
                        },
                        "message": {
                          
                        },
                        "customIcon": {
                          
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      }
                    },
                    "analytics": {
                      "context": "seo-data-afce66f9-fd2f-473a-b304-91af265614ea"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/restaurants/wendys-burgers-near-aashka-multispeciality-hospital-gandhinagar-ahmedabad-565280",
                      "text": "RESTAURANT_MENU",
                      "type": "WEBLINK"
                    },
                    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                  },
                  {
                    "info": {
                      "id": "318342",
                      "name": "La Pino'z Pizza",
                      "cloudinaryImageId": "rpe90k61q1mftqvop5e3",
                      "locality": "Gandhinagar",
                      "areaName": "Sector 11",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Pizzas",
                        "Pastas",
                        "Italian",
                        "Desserts",
                        "Beverages"
                      ],
                      "avgRating": 4.1,
                      "veg": true,
                      "feeDetails": {
                        "restaurantId": "318342",
                        "fees": [
                          {
                            "name": "BASE_DISTANCE",
                            "fee": 2600
                          },
                          {
                            "name": "BASE_TIME"
                          },
                          {
                            "name": "ANCILLARY_SURGE_FEE"
                          }
                        ],
                        "totalFee": 2600
                      },
                      "parentId": "4961",
                      "avgRatingString": "4.1",
                      "totalRatingsString": "1K+",
                      "sla": {
                        "deliveryTime": 21,
                        "lastMileTravel": 1.8,
                        "serviceability": "SERVICEABLE",
                        "slaString": "21 mins",
                        "lastMileTravelString": "1.8 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2023-09-21 23:00:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹125 OFF",
                        "subHeader": "ABOVE ₹399",
                        "discountTag": "FLAT DEAL"
                      },
                      "orderabilityCommunication": {
                        "title": {
                          
                        },
                        "subTitle": {
                          
                        },
                        "message": {
                          
                        },
                        "customIcon": {
                          
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      }
                    },
                    "analytics": {
                      "context": "seo-data-afce66f9-fd2f-473a-b304-91af265614ea"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/restaurants/la-pinoz-pizza-gandhinagar-sector-11-ahmedabad-318342",
                      "text": "RESTAURANT_MENU",
                      "type": "WEBLINK"
                    },
                    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                  },
                  {
                    "info": {
                      "id": "240796",
                      "name": "Pizza Hut",
                      "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
                      "locality": "Kudasan Road",
                      "areaName": "Gandhinagar",
                      "costForTwo": "₹600 for two",
                      "cuisines": [
                        "Pizzas"
                      ],
                      "avgRating": 3.8,
                      "feeDetails": {
                        "restaurantId": "240796",
                        "fees": [
                          {
                            "name": "BASE_DISTANCE",
                            "fee": 3600
                          },
                          {
                            "name": "BASE_TIME"
                          },
                          {
                            "name": "ANCILLARY_SURGE_FEE"
                          }
                        ],
                        "totalFee": 3600
                      },
                      "parentId": "721",
                      "avgRatingString": "3.8",
                      "totalRatingsString": "1K+",
                      "sla": {
                        "deliveryTime": 27,
                        "lastMileTravel": 4.2,
                        "serviceability": "SERVICEABLE",
                        "slaString": "27 mins",
                        "lastMileTravelString": "4.2 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2023-09-22 01:00:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "aggregatedDiscountInfoV2": {
                        
                      },
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "orderabilityCommunication": {
                        "title": {
                          
                        },
                        "subTitle": {
                          
                        },
                        "message": {
                          
                        },
                        "customIcon": {
                          
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      }
                    },
                    "analytics": {
                      "context": "seo-data-afce66f9-fd2f-473a-b304-91af265614ea"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/restaurants/pizza-hut-kudasan-road-gandhinagar-ahmedabad-240796",
                      "text": "RESTAURANT_MENU",
                      "type": "WEBLINK"
                    },
                    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                  },
                  {
                    "info": {
                      "id": "576463",
                      "name": "Western Pizza Hub",
                      "cloudinaryImageId": "ns3u6sua4usjqez26ri5",
                      "locality": "Vavol Kolvada Road",
                      "areaName": "Gandhinagar",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Pizzas",
                        "Italian",
                        "Burgers",
                        "Snacks",
                        "Beverages"
                      ],
                      "avgRating": 3.8,
                      "feeDetails": {
                        "restaurantId": "576463",
                        "fees": [
                          {
                            "name": "BASE_DISTANCE",
                            "fee": 3100
                          },
                          {
                            "name": "BASE_TIME"
                          },
                          {
                            "name": "ANCILLARY_SURGE_FEE"
                          }
                        ],
                        "totalFee": 3100
                      },
                      "parentId": "225662",
                      "avgRatingString": "3.8",
                      "totalRatingsString": "100+",
                      "sla": {
                        "deliveryTime": 28,
                        "lastMileTravel": 3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "28 mins",
                        "lastMileTravelString": "3.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2023-09-22 00:00:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹125 OFF",
                        "subHeader": "ABOVE ₹499",
                        "discountTag": "FLAT DEAL"
                      },
                      "orderabilityCommunication": {
                        "title": {
                          
                        },
                        "subTitle": {
                          
                        },
                        "message": {
                          
                        },
                        "customIcon": {
                          
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      }
                    },
                    "analytics": {
                      "context": "seo-data-afce66f9-fd2f-473a-b304-91af265614ea"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/restaurants/western-pizza-hub-vavol-kolvada-road-gandhinagar-ahmedabad-576463",
                      "text": "RESTAURANT_MENU",
                      "type": "WEBLINK"
                    },
                    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                  },
                  {
                    "info": {
                      "id": "109482",
                      "name": "Mocha",
                      "cloudinaryImageId": "becb6f10a63f391672c48c16ed00e9de",
                      "locality": "Gandhinagar",
                      "areaName": "Gandhinagar",
                      "costForTwo": "₹700 for two",
                      "cuisines": [
                        "American",
                        "Italian"
                      ],
                      "avgRating": 4.1,
                      "feeDetails": {
                        "restaurantId": "109482",
                        "fees": [
                          {
                            "name": "BASE_DISTANCE",
                            "fee": 5300
                          },
                          {
                            "name": "BASE_TIME"
                          },
                          {
                            "name": "ANCILLARY_SURGE_FEE"
                          }
                        ],
                        "totalFee": 5300
                      },
                      "parentId": "5417",
                      "avgRatingString": "4.1",
                      "totalRatingsString": "1K+",
                      "sla": {
                        "deliveryTime": 30,
                        "lastMileTravel": 3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30 mins",
                        "lastMileTravelString": "3.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2023-09-21 23:15:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "newg.png",
                            "description": "Gourmet"
                          }
                        ]
                      },
                      "isOpen": true,
                      "aggregatedDiscountInfoV2": {
                        
                      },
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Gourmet",
                                  "imageId": "newg.png"
                                }
                              }
                            ]
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "orderabilityCommunication": {
                        "title": {
                          
                        },
                        "subTitle": {
                          
                        },
                        "message": {
                          
                        },
                        "customIcon": {
                          
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      }
                    },
                    "analytics": {
                      "context": "seo-data-afce66f9-fd2f-473a-b304-91af265614ea"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/restaurants/mocha-gandhinagar-ahmedabad-109482",
                      "text": "RESTAURANT_MENU",
                      "type": "WEBLINK"
                    },
                    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                  },
                  {
                    "info": {
                      "id": "45169",
                      "name": "Gwalia Sweets & Fast Food",
                      "cloudinaryImageId": "yeiqsiliyvt0k7arhvqf",
                      "locality": "Super Mall 2",
                      "areaName": "Infocity",
                      "costForTwo": "₹300 for two",
                      "cuisines": [
                        "Sweets",
                        "Snacks",
                        "Thalis",
                        "Desserts"
                      ],
                      "avgRating": 4,
                      "veg": true,
                      "feeDetails": {
                        "restaurantId": "45169",
                        "fees": [
                          {
                            "name": "BASE_DISTANCE",
                            "fee": 2600
                          },
                          {
                            "name": "BASE_TIME"
                          },
                          {
                            "name": "ANCILLARY_SURGE_FEE"
                          }
                        ],
                        "totalFee": 2600
                      },
                      "parentId": "92340",
                      "avgRatingString": "4.0",
                      "totalRatingsString": "1K+",
                      "sla": {
                        "deliveryTime": 16,
                        "lastMileTravel": 2.8,
                        "serviceability": "SERVICEABLE",
                        "slaString": "16 mins",
                        "lastMileTravelString": "2.8 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2023-09-21 22:30:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "aggregatedDiscountInfoV2": {
                        
                      },
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "orderabilityCommunication": {
                        "title": {
                          
                        },
                        "subTitle": {
                          
                        },
                        "message": {
                          
                        },
                        "customIcon": {
                          
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      }
                    },
                    "analytics": {
                      "context": "seo-data-afce66f9-fd2f-473a-b304-91af265614ea"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/restaurants/gwalia-sweets-and-fast-food-super-mall-2-infocity-ahmedabad-45169",
                      "text": "RESTAURANT_MENU",
                      "type": "WEBLINK"
                    },
                    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                  },
                  {
                    "info": {
                      "id": "53986",
                      "name": "Subway",
                      "cloudinaryImageId": "1ace5fa65eff3e1223feb696c956b38b",
                      "locality": "Gandhinagar",
                      "areaName": "Sector 11",
                      "costForTwo": "₹350 for two",
                      "cuisines": [
                        "Healthy Food",
                        "Salads",
                        "Snacks",
                        "Desserts",
                        "Beverages"
                      ],
                      "avgRating": 4.2,
                      "feeDetails": {
                        "restaurantId": "53986",
                        "fees": [
                          {
                            "name": "BASE_DISTANCE",
                            "fee": 2600
                          },
                          {
                            "name": "BASE_TIME"
                          },
                          {
                            "name": "ANCILLARY_SURGE_FEE"
                          }
                        ],
                        "totalFee": 2600
                      },
                      "parentId": "2",
                      "avgRatingString": "4.2",
                      "totalRatingsString": "5K+",
                      "sla": {
                        "deliveryTime": 17,
                        "lastMileTravel": 2.1,
                        "serviceability": "SERVICEABLE",
                        "slaString": "17 mins",
                        "lastMileTravelString": "2.1 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2023-09-21 22:14:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "aggregatedDiscountInfoV2": {
                        
                      },
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "orderabilityCommunication": {
                        "title": {
                          
                        },
                        "subTitle": {
                          
                        },
                        "message": {
                          
                        },
                        "customIcon": {
                          
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      }
                    },
                    "analytics": {
                      "context": "seo-data-afce66f9-fd2f-473a-b304-91af265614ea"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/restaurants/subway-gandhinagar-sector-11-ahmedabad-53986",
                      "text": "RESTAURANT_MENU",
                      "type": "WEBLINK"
                    },
                    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                  }
                ],
                "theme": "SeoRestaurantListingGridWidget"
              }
            }
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.seo.widgets.v1.ShowMoreButton",
            "message": "Show More",
            "id": "show_more_button"
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.seo.widgets.v1.BrandsContent",
            "title": "Best Places to Eat Across Cities",
            "brands": [
              {
                "text": "Best Restaurants in Bangalore",
                "link": "https://www.swiggy.com/city/bangalore/best-restaurants"
              },
              {
                "text": "Best Restaurants in Pune",
                "link": "https://www.swiggy.com/city/pune/best-restaurants"
              },
              {
                "text": "Best Restaurants in Mumbai",
                "link": "https://www.swiggy.com/city/mumbai/best-restaurants"
              },
              {
                "text": "Best Restaurants in Delhi",
                "link": "https://www.swiggy.com/city/delhi/best-restaurants"
              },
              {
                "text": "Best Restaurants in Hyderabad",
                "link": "https://www.swiggy.com/city/hyderabad/best-restaurants"
              },
              {
                "text": "Best Restaurants in Kolkata",
                "link": "https://www.swiggy.com/city/kolkata/best-restaurants"
              },
              {
                "text": "Best Restaurants in Chennai",
                "link": "https://www.swiggy.com/city/chennai/best-restaurants"
              },
              {
                "text": "Best Restaurants in Chandigarh",
                "link": "https://www.swiggy.com/city/chandigarh/best-restaurants"
              },
              {
                "text": "Best Restaurants in Ahmedabad",
                "link": "https://www.swiggy.com/city/ahmedabad/best-restaurants"
              },
              {
                "text": "Best Restaurants in Jaipur",
                "link": "https://www.swiggy.com/city/jaipur/best-restaurants"
              },
              {
                "text": "Best Restaurants in Nagpur",
                "link": "https://www.swiggy.com/city/nagpur/best-restaurants"
              },
              {
                "text": "Best Restaurants in Bhubaneswar",
                "link": "https://www.swiggy.com/city/bhubaneswar/best-restaurants"
              },
              {
                "text": "Best Restaurants in Kochi",
                "link": "https://www.swiggy.com/city/kochi/best-restaurants"
              },
              {
                "text": "Best Restaurants in Surat",
                "link": "https://www.swiggy.com/city/surat/best-restaurants"
              },
              {
                "text": "Best Restaurants in Dehradun",
                "link": "https://www.swiggy.com/city/dehradun/best-restaurants"
              },
              {
                "text": "Best Restaurants in Ludhiana",
                "link": "https://www.swiggy.com/city/ludhiana/best-restaurants"
              },
              {
                "text": "Best Restaurants in Patna",
                "link": "https://www.swiggy.com/city/patna/best-restaurants"
              },
              {
                "text": "Best Restaurants in Mangaluru",
                "link": "https://www.swiggy.com/city/mangaluru/best-restaurants"
              },
              {
                "text": "Best Restaurants in Bhopal",
                "link": "https://www.swiggy.com/city/bhopal/best-restaurants"
              },
              {
                "text": "Best Restaurants in Gurgaon",
                "link": "https://www.swiggy.com/city/gurgaon/best-restaurants"
              },
              {
                "text": "Best Restaurants in Coimbatore",
                "link": "https://www.swiggy.com/city/coimbatore/best-restaurants"
              },
              {
                "text": "Best Restaurants in Agra",
                "link": "https://www.swiggy.com/city/agra/best-restaurants"
              },
              {
                "text": "Best Restaurants in Noida",
                "link": "https://www.swiggy.com/city/noida/best-restaurants"
              },
              {
                "text": "Best Restaurants in Vijayawada",
                "link": "https://www.swiggy.com/city/vijayawada/best-restaurants"
              },
              {
                "text": "Best Restaurants in Guwahati",
                "link": "https://www.swiggy.com/city/guwahati/best-restaurants"
              },
              {
                "text": "Best Restaurants in Mysore",
                "link": "https://www.swiggy.com/city/mysore/best-restaurants"
              },
              {
                "text": "Best Restaurants in Pondicherry",
                "link": "https://www.swiggy.com/city/pondicherry/best-restaurants"
              },
              {
                "text": "Best Restaurants in Thiruvananthapuram",
                "link": "https://www.swiggy.com/city/thiruvananthapuram/best-restaurants"
              },
              {
                "text": "Best Restaurants in Ranchi",
                "link": "https://www.swiggy.com/city/ranchi/best-restaurants"
              },
              {
                "text": "Best Restaurants in Vizag",
                "link": "https://www.swiggy.com/city/vizag/best-restaurants"
              },
              {
                "text": "Best Restaurants in Vadodara",
                "link": "https://www.swiggy.com/city/vadodara/best-restaurants"
              }
            ],
            "id": "restaurant_near_me_links"
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.seo.widgets.v1.BrandsContent",
            "title": "Best Cuisines Near Me",
            "brands": [
              {
                "text": "Chinese Restaurant Near Me",
                "link": "https://www.swiggy.com/chinese-restaurants-near-me"
              },
              {
                "text": "South Indian Restaurant Near Me",
                "link": "https://www.swiggy.com/south-indian-restaurants-near-me"
              },
              {
                "text": "Indian Restaurant Near Me",
                "link": "https://www.swiggy.com/indian-restaurants-near-me"
              },
              {
                "text": "Kerala Restaurant Near Me",
                "link": "https://www.swiggy.com/kerala-restaurants-near-me"
              },
              {
                "text": "Korean Restaurant Near Me",
                "link": "https://www.swiggy.com/korean-restaurants-near-me"
              },
              {
                "text": "North Indian Restaurant Near Me",
                "link": "https://www.swiggy.com/north-indian-restaurants-near-me"
              },
              {
                "text": "Seafood Restaurant Near Me",
                "link": "https://www.swiggy.com/seafood-restaurants-near-me"
              },
              {
                "text": "Bengali Restaurant Near Me",
                "link": "https://www.swiggy.com/bengali-restaurants-near-me"
              },
              {
                "text": "Punjabi Restaurant Near Me",
                "link": "https://www.swiggy.com/punjabi-restaurants-near-me"
              },
              {
                "text": "Italian Restaurant Near Me",
                "link": "https://www.swiggy.com/italian-restaurants-near-me"
              },
              {
                "text": "Andhra Restaurant Near Me",
                "link": "https://www.swiggy.com/andhra-restaurants-near-me"
              },
              {
                "text": "Biryani Restaurant Near Me",
                "link": "https://www.swiggy.com/biryani-restaurants-near-me"
              },
              {
                "text": "Japanese Restaurant Near Me",
                "link": "https://www.swiggy.com/japanese-restaurants-near-me"
              },
              {
                "text": "Arabian Restaurant Near Me",
                "link": "https://www.swiggy.com/arabian-restaurants-near-me"
              },
              {
                "text": "Fast Food Restaurant Near Me",
                "link": "https://www.swiggy.com/fast-food-restaurants-near-me"
              },
              {
                "text": "Jain Restaurant Near Me",
                "link": "https://www.swiggy.com/jain-restaurants-near-me"
              },
              {
                "text": "Thai Restaurant Near Me",
                "link": "https://www.swiggy.com/thai-restaurants-near-me"
              },
              {
                "text": "Pizzas Restaurant Near Me",
                "link": "https://www.swiggy.com/pizzas-restaurants-near-me"
              },
              {
                "text": "Asian Restaurant Near Me",
                "link": "https://www.swiggy.com/asian-restaurants-near-me"
              },
              {
                "text": "Cafe Restaurant Near Me",
                "link": "https://www.swiggy.com/cafe-restaurants-near-me"
              },
              {
                "text": "Continental Restaurant Near Me",
                "link": "https://www.swiggy.com/continental-restaurants-near-me"
              },
              {
                "text": "Mexican Restaurant Near Me",
                "link": "https://www.swiggy.com/mexican-restaurants-near-me"
              },
              {
                "text": "Mughlai Restaurant Near Me",
                "link": "https://www.swiggy.com/mughlai-restaurants-near-me"
              },
              {
                "text": "Sushi Restaurant Near Me",
                "link": "https://www.swiggy.com/sushi-restaurants-near-me"
              },
              {
                "text": "Mangalorean Restaurant Near Me",
                "link": "https://www.swiggy.com/mangalorean-restaurants-near-me"
              },
              {
                "text": "Tibetan Restaurant Near Me",
                "link": "https://www.swiggy.com/tibetan-restaurants-near-me"
              },
              {
                "text": "Barbecue Restaurant Near Me",
                "link": "https://www.swiggy.com/barbecue-restaurants-near-me"
              },
              {
                "text": "Maharashtrian Restaurant Near Me",
                "link": "https://www.swiggy.com/maharashtrian-restaurants-near-me"
              },
              {
                "text": "Nepalese Restaurant Near Me",
                "link": "https://www.swiggy.com/nepalese-restaurants-near-me"
              },
              {
                "text": "Rajasthani Restaurant Near Me",
                "link": "https://www.swiggy.com/rajasthani-restaurants-near-me"
              },
              {
                "text": "Turkish Restaurant Near Me",
                "link": "https://www.swiggy.com/turkish-restaurants-near-me"
              }
            ],
            "id": "restaurant_near_me_links"
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.seo.widgets.v1.BrandsContent",
            "title": "Explore Every Restaurants Near Me",
            "brands": [
              {
                "text": "Explore Restaurants Near Me",
                "link": "https://www.swiggy.com/restaurants-near-me"
              },
              {
                "text": "Explore Top Rated Restaurants Near Me",
                "link": "https://www.swiggy.com/best-restaurants-near-me"
              }
            ],
            "id": "restaurant_near_me_links"
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.seo.widgets.v1.AppInstallLinks",
            "title": "For better experience,download the Swiggy app now",
            "androidAppImage": "portal/m/play_store.png",
            "androidAppLink": "https://play.google.com/store/apps/details?id=in.swiggy.android&referrer=utm_source%3Dswiggy%26utm_medium%3Dheader",
            "iosAppImage": "portal/m/app_store.png",
            "iosAppLink": "https://itunes.apple.com/in/app/id989540920?referrer=utm_source%3Dswiggy%26utm_medium%3Dhomepage",
            "id": "app_install_links"
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.seo.widgets.v1.FooterContent",
            "cities": [
              {
                "text": "Bangalore",
                "link": "https://www.swiggy.com/city/bangalore"
              },
              {
                "text": "Gurgaon",
                "link": "https://www.swiggy.com/city/gurgaon"
              },
              {
                "text": "Hyderabad",
                "link": "https://www.swiggy.com/city/hyderabad"
              },
              {
                "text": "Delhi",
                "link": "https://www.swiggy.com/city/delhi"
              },
              {
                "text": "Mumbai",
                "link": "https://www.swiggy.com/city/mumbai"
              },
              {
                "text": "Pune",
                "link": "https://www.swiggy.com/city/pune"
              },
              {
                "text": "Kolkata",
                "link": "https://www.swiggy.com/city/kolkata"
              },
              {
                "text": "Chennai",
                "link": "https://www.swiggy.com/city/chennai"
              },
              {
                "text": "Ahmedabad",
                "link": "https://www.swiggy.com/city/ahmedabad"
              },
              {
                "text": "Chandigarh",
                "link": "https://www.swiggy.com/city/chandigarh"
              },
              {
                "text": "Jaipur",
                "link": "https://www.swiggy.com/city/jaipur"
              },
              {
                "text": "Kochi",
                "link": "https://www.swiggy.com/city/kochi"
              },
              {
                "text": "Coimbatore",
                "link": "https://www.swiggy.com/city/coimbatore"
              },
              {
                "text": "Lucknow",
                "link": "https://www.swiggy.com/city/lucknow"
              },
              {
                "text": "Nagpur",
                "link": "https://www.swiggy.com/city/nagpur"
              },
              {
                "text": "Vadodara",
                "link": "https://www.swiggy.com/city/vadodara"
              },
              {
                "text": "Indore",
                "link": "https://www.swiggy.com/city/indore"
              },
              {
                "text": "Guwahati",
                "link": "https://www.swiggy.com/city/guwahati"
              },
              {
                "text": "Vizag",
                "link": "https://www.swiggy.com/city/vizag"
              },
              {
                "text": "Surat",
                "link": "https://www.swiggy.com/city/surat"
              },
              {
                "text": "Dehradun",
                "link": "https://www.swiggy.com/city/dehradun"
              },
              {
                "text": "Noida",
                "link": "https://www.swiggy.com/city/noida"
              },
              {
                "text": "Ludhiana",
                "link": "https://www.swiggy.com/city/ludhiana"
              },
              {
                "text": "Trichy",
                "link": "https://www.swiggy.com/city/trichy"
              },
              {
                "text": "Vijayawada",
                "link": "https://www.swiggy.com/city/vijayawada"
              },
              {
                "text": "Kanpur",
                "link": "https://www.swiggy.com/city/kanpur"
              },
              {
                "text": "Mysore",
                "link": "https://www.swiggy.com/city/mysore"
              },
              {
                "text": "Nashik",
                "link": "https://www.swiggy.com/city/nashik"
              },
              {
                "text": "Pondicherry",
                "link": "https://www.swiggy.com/city/pondicherry"
              },
              {
                "text": "Agra",
                "link": "https://www.swiggy.com/city/agra"
              },
              {
                "text": "Aurangabad",
                "link": "https://www.swiggy.com/city/aurangabad"
              },
              {
                "text": "Jalandhar",
                "link": "https://www.swiggy.com/city/jalandhar"
              },
              {
                "text": "Kota",
                "link": "https://www.swiggy.com/city/kota"
              },
              {
                "text": "Madurai",
                "link": "https://www.swiggy.com/city/madurai"
              },
              {
                "text": "Allahabad",
                "link": "https://www.swiggy.com/city/allahabad"
              },
              {
                "text": "Manipal",
                "link": "https://www.swiggy.com/city/manipal"
              },
              {
                "text": "Amritsar",
                "link": "https://www.swiggy.com/city/amritsar"
              },
              {
                "text": "Bareilly",
                "link": "https://www.swiggy.com/city/bareilly"
              },
              {
                "text": "Meerut",
                "link": "https://www.swiggy.com/city/meerut"
              },
              {
                "text": "Bhopal",
                "link": "https://www.swiggy.com/city/bhopal"
              },
              {
                "text": "Ooty",
                "link": "https://www.swiggy.com/city/ooty"
              },
              {
                "text": "Bhubaneswar",
                "link": "https://www.swiggy.com/city/bhubaneswar"
              },
              {
                "text": "Raipur",
                "link": "https://www.swiggy.com/city/raipur"
              },
              {
                "text": "Bikaner",
                "link": "https://www.swiggy.com/city/bikaner"
              },
              {
                "text": "Rajkot",
                "link": "https://www.swiggy.com/city/rajkot"
              },
              {
                "text": "Kozhikode",
                "link": "https://www.swiggy.com/city/kozhikode"
              },
              {
                "text": "Central Goa",
                "link": "https://www.swiggy.com/city/central-goa"
              },
              {
                "text": "Sirsa",
                "link": "https://www.swiggy.com/city/sirsa"
              },
              {
                "text": "Gwalior",
                "link": "https://www.swiggy.com/city/gwalior"
              },
              {
                "text": "Thrissur",
                "link": "https://www.swiggy.com/city/thrissur"
              },
              {
                "text": "Kharagpur",
                "link": "https://www.swiggy.com/city/kharagpur"
              },
              {
                "text": "Tirupati",
                "link": "https://www.swiggy.com/city/tirupati"
              },
              {
                "text": "Tirupur",
                "link": "https://www.swiggy.com/city/tirupur"
              },
              {
                "text": "Vellore",
                "link": "https://www.swiggy.com/city/vellore"
              },
              {
                "text": "Thiruvananthapuram",
                "link": "https://www.swiggy.com/city/thiruvananthapuram"
              },
              {
                "text": "Warangal",
                "link": "https://www.swiggy.com/city/warangal"
              },
              {
                "text": "Varanasi",
                "link": "https://www.swiggy.com/city/varanasi"
              },
              {
                "text": "Mangaluru",
                "link": "https://www.swiggy.com/city/mangaluru"
              },
              {
                "text": "Patna",
                "link": "https://www.swiggy.com/city/patna"
              },
              {
                "text": "Ranchi",
                "link": "https://www.swiggy.com/city/ranchi"
              },
              {
                "text": "Faridabad",
                "link": "https://www.swiggy.com/city/faridabad"
              },
              {
                "text": "Guntur",
                "link": "https://www.swiggy.com/city/guntur"
              },
              {
                "text": "Ujjain",
                "link": "https://www.swiggy.com/city/ujjain"
              },
              {
                "text": "Patiala",
                "link": "https://www.swiggy.com/city/patiala"
              },
              {
                "text": "Karnal",
                "link": "https://www.swiggy.com/city/karnal"
              },
              {
                "text": "Kakinada",
                "link": "https://www.swiggy.com/city/kakinada"
              },
              {
                "text": "Rajahmundry",
                "link": "https://www.swiggy.com/city/rajahmundry"
              },
              {
                "text": "Bilaspur",
                "link": "https://www.swiggy.com/city/bilaspur"
              },
              {
                "text": "Bhilai",
                "link": "https://www.swiggy.com/city/bhilai"
              },
              {
                "text": "Anand",
                "link": "https://www.swiggy.com/city/anand"
              },
              {
                "text": "Bhavnagar",
                "link": "https://www.swiggy.com/city/bhavnagar"
              },
              {
                "text": "Jammu",
                "link": "https://www.swiggy.com/city/jammu"
              },
              {
                "text": "Muktsar",
                "link": "https://www.swiggy.com/city/muktsar"
              },
              {
                "text": "Panipat",
                "link": "https://www.swiggy.com/city/panipat"
              },
              {
                "text": "Dhanbad",
                "link": "https://www.swiggy.com/city/dhanbad"
              },
              {
                "text": "Hubli",
                "link": "https://www.swiggy.com/city/hubli"
              },
              {
                "text": "Belgaum",
                "link": "https://www.swiggy.com/city/belgaum"
              },
              {
                "text": "Jabalpur",
                "link": "https://www.swiggy.com/city/jabalpur"
              },
              {
                "text": "Kolhapur",
                "link": "https://www.swiggy.com/city/kolhapur"
              },
              {
                "text": "Solapur",
                "link": "https://www.swiggy.com/city/solapur"
              },
              {
                "text": "Shillong",
                "link": "https://www.swiggy.com/city/shillong"
              },
              {
                "text": "Cuttack",
                "link": "https://www.swiggy.com/city/cuttack"
              },
              {
                "text": "Aligarh",
                "link": "https://www.swiggy.com/city/aligarh"
              },
              {
                "text": "Salem",
                "link": "https://www.swiggy.com/city/salem"
              },
              {
                "text": "Jodhpur",
                "link": "https://www.swiggy.com/city/jodhpur"
              },
              {
                "text": "Ajmer",
                "link": "https://www.swiggy.com/city/ajmer"
              },
              {
                "text": "Jhansi",
                "link": "https://www.swiggy.com/city/jhansi"
              },
              {
                "text": "Gorakhpur",
                "link": "https://www.swiggy.com/city/gorakhpur"
              },
              {
                "text": "Thanjavur",
                "link": "https://www.swiggy.com/city/thanjavur"
              },
              {
                "text": "Erode",
                "link": "https://www.swiggy.com/city/erode"
              },
              {
                "text": "Nellore",
                "link": "https://www.swiggy.com/city/nellore"
              },
              {
                "text": "Rourkela",
                "link": "https://www.swiggy.com/city/rourkela"
              },
              {
                "text": "Anantapur",
                "link": "https://www.swiggy.com/city/anantapur"
              },
              {
                "text": "Kurnool",
                "link": "https://www.swiggy.com/city/kurnool"
              },
              {
                "text": "Ahmednagar",
                "link": "https://www.swiggy.com/city/ahmednagar"
              },
              {
                "text": "Phagwara",
                "link": "https://www.swiggy.com/city/phagwara"
              },
              {
                "text": "Ambala",
                "link": "https://www.swiggy.com/city/ambala"
              },
              {
                "text": "Ballari",
                "link": "https://www.swiggy.com/city/ballari"
              },
              {
                "text": "Saharanpur",
                "link": "https://www.swiggy.com/city/saharanpur"
              },
              {
                "text": "Tirunelveli",
                "link": "https://www.swiggy.com/city/tirunelveli"
              },
              {
                "text": "Bathinda",
                "link": "https://www.swiggy.com/city/bathinda"
              },
              {
                "text": "Mathura",
                "link": "https://www.swiggy.com/city/mathura"
              },
              {
                "text": "Haridwar",
                "link": "https://www.swiggy.com/city/haridwar"
              },
              {
                "text": "Ratnagiri",
                "link": "https://www.swiggy.com/city/ratnagiri"
              },
              {
                "text": "Sangli",
                "link": "https://www.swiggy.com/city/sangli"
              },
              {
                "text": "Amravati",
                "link": "https://www.swiggy.com/city/amravati"
              },
              {
                "text": "Rishikesh",
                "link": "https://www.swiggy.com/city/rishikesh"
              },
              {
                "text": "Nagercoil",
                "link": "https://www.swiggy.com/city/nagercoil"
              },
              {
                "text": "KanyaKumari",
                "link": "https://www.swiggy.com/city/kanyakumari"
              },
              {
                "text": "Kadapa",
                "link": "https://www.swiggy.com/city/kadapa"
              },
              {
                "text": "Nizamabad",
                "link": "https://www.swiggy.com/city/nizamabad"
              },
              {
                "text": "Shivamogga",
                "link": "https://www.swiggy.com/city/shivamogga"
              },
              {
                "text": "Davanagere",
                "link": "https://www.swiggy.com/city/davanagere"
              },
              {
                "text": "Roorkee",
                "link": "https://www.swiggy.com/city/roorkee"
              },
              {
                "text": "Nanded",
                "link": "https://www.swiggy.com/city/nanded"
              },
              {
                "text": "Rewa",
                "link": "https://www.swiggy.com/city/rewa"
              },
              {
                "text": "Satna",
                "link": "https://www.swiggy.com/city/satna"
              },
              {
                "text": "Muzaffarpur",
                "link": "https://www.swiggy.com/city/muzaffarpur"
              },
              {
                "text": "Valsad",
                "link": "https://www.swiggy.com/city/valsad"
              },
              {
                "text": "Vapi",
                "link": "https://www.swiggy.com/city/vapi"
              },
              {
                "text": "Chhapra",
                "link": "https://www.swiggy.com/city/chhapra"
              },
              {
                "text": "Dharamshala",
                "link": "https://www.swiggy.com/city/dharamshala"
              },
              {
                "text": "Kollam",
                "link": "https://www.swiggy.com/city/kollam"
              },
              {
                "text": "Silchar",
                "link": "https://www.swiggy.com/city/silchar"
              },
              {
                "text": "Alappuzha",
                "link": "https://www.swiggy.com/city/alappuzha"
              },
              {
                "text": "Sonipat",
                "link": "https://www.swiggy.com/city/sonipat"
              },
              {
                "text": "Rohtak",
                "link": "https://www.swiggy.com/city/rohtak"
              },
              {
                "text": "Mehsana",
                "link": "https://www.swiggy.com/city/mehsana"
              },
              {
                "text": "Kullu",
                "link": "https://www.swiggy.com/city/kullu"
              },
              {
                "text": "Dhule",
                "link": "https://www.swiggy.com/city/dhule"
              },
              {
                "text": "Dharwad",
                "link": "https://www.swiggy.com/city/dharwad"
              },
              {
                "text": "Latur",
                "link": "https://www.swiggy.com/city/latur"
              },
              {
                "text": "Vizianagaram",
                "link": "https://www.swiggy.com/city/vizianagaram"
              },
              {
                "text": "Khammam",
                "link": "https://www.swiggy.com/city/khammam"
              },
              {
                "text": "Hampi",
                "link": "https://www.swiggy.com/city/hampi"
              },
              {
                "text": "Nainital",
                "link": "https://www.swiggy.com/city/nainital"
              },
              {
                "text": "Akola",
                "link": "https://www.swiggy.com/city/akola"
              },
              {
                "text": "Kalaburagi",
                "link": "https://www.swiggy.com/city/kalaburagi"
              },
              {
                "text": "Gaya",
                "link": "https://www.swiggy.com/city/gaya"
              },
              {
                "text": "Muzaffarnagar",
                "link": "https://www.swiggy.com/city/muzaffarnagar"
              },
              {
                "text": "Dewas",
                "link": "https://www.swiggy.com/city/dewas"
              },
              {
                "text": "Korba",
                "link": "https://www.swiggy.com/city/korba"
              },
              {
                "text": "Mussoorie",
                "link": "https://www.swiggy.com/city/mussoorie"
              },
              {
                "text": "Jalgaon",
                "link": "https://www.swiggy.com/city/jalgaon"
              },
              {
                "text": "Yamuna Nagar",
                "link": "https://www.swiggy.com/city/yamuna-nagar"
              },
              {
                "text": "Bhagalpur",
                "link": "https://www.swiggy.com/city/bhagalpur"
              },
              {
                "text": "Hapur",
                "link": "https://www.swiggy.com/city/hapur"
              },
              {
                "text": "Morena",
                "link": "https://www.swiggy.com/city/morena"
              },
              {
                "text": "Hassan",
                "link": "https://www.swiggy.com/city/hassan"
              },
              {
                "text": "Hisar",
                "link": "https://www.swiggy.com/city/hisar"
              },
              {
                "text": "Godhra",
                "link": "https://www.swiggy.com/city/godhra"
              },
              {
                "text": "Kolar ",
                "link": "https://www.swiggy.com/city/kolar"
              },
              {
                "text": "Rampur",
                "link": "https://www.swiggy.com/city/rampur"
              },
              {
                "text": "Sitapur",
                "link": "https://www.swiggy.com/city/sitapur"
              },
              {
                "text": "Etawah",
                "link": "https://www.swiggy.com/city/etawah"
              },
              {
                "text": "Porbandar",
                "link": "https://www.swiggy.com/city/porbandar"
              },
              {
                "text": "Nadiad",
                "link": "https://www.swiggy.com/city/nadiad"
              },
              {
                "text": "Sagar",
                "link": "https://www.swiggy.com/city/sagar"
              },
              {
                "text": "Morbi",
                "link": "https://www.swiggy.com/city/morbi"
              },
              {
                "text": "Chhindwara",
                "link": "https://www.swiggy.com/city/chhindwara"
              },
              {
                "text": "Tumakuru",
                "link": "https://www.swiggy.com/city/tumakuru"
              },
              {
                "text": "Singrauli",
                "link": "https://www.swiggy.com/city/singrauli"
              },
              {
                "text": "Thoothukudi",
                "link": "https://www.swiggy.com/city/thoothukudi"
              },
              {
                "text": "Katni",
                "link": "https://www.swiggy.com/city/katni"
              },
              {
                "text": "Khandwa",
                "link": "https://www.swiggy.com/city/khandwa"
              },
              {
                "text": "Eluru",
                "link": "https://www.swiggy.com/city/eluru"
              },
              {
                "text": "Malappuram",
                "link": "https://www.swiggy.com/city/malappuram"
              },
              {
                "text": "Dibrugarh",
                "link": "https://www.swiggy.com/city/dibrugarh"
              },
              {
                "text": "Deoghar",
                "link": "https://www.swiggy.com/city/deoghar"
              },
              {
                "text": "Khanna",
                "link": "https://www.swiggy.com/city/khanna"
              },
              {
                "text": "Bidar",
                "link": "https://www.swiggy.com/city/bidar"
              },
              {
                "text": "Madikeri",
                "link": "https://www.swiggy.com/city/madikeri"
              },
              {
                "text": "Haldwani",
                "link": "https://www.swiggy.com/city/haldwani"
              },
              {
                "text": "Farrukhabad",
                "link": "https://www.swiggy.com/city/farrukhabad"
              },
              {
                "text": "Malegaon",
                "link": "https://www.swiggy.com/city/malegaon"
              },
              {
                "text": "Dindigul",
                "link": "https://www.swiggy.com/city/dindigul"
              },
              {
                "text": "Shahjahanpur",
                "link": "https://www.swiggy.com/city/shahjahanpur"
              },
              {
                "text": "Beed",
                "link": "https://www.swiggy.com/city/beed"
              },
              {
                "text": "Junagadh",
                "link": "https://www.swiggy.com/city/junagadh"
              },
              {
                "text": "Asansol",
                "link": "https://www.swiggy.com/city/asansol"
              },
              {
                "text": "Beawar",
                "link": "https://www.swiggy.com/city/beawar"
              },
              {
                "text": "Kishangarh",
                "link": "https://www.swiggy.com/city/kishangarh"
              },
              {
                "text": "Parbhani",
                "link": "https://www.swiggy.com/city/parbhani"
              },
              {
                "text": "Gondia",
                "link": "https://www.swiggy.com/city/gondia"
              },
              {
                "text": "Ichalkaranji",
                "link": "https://www.swiggy.com/city/ichalkaranji"
              },
              {
                "text": "Jalna",
                "link": "https://www.swiggy.com/city/jalna"
              },
              {
                "text": "Yavatmal",
                "link": "https://www.swiggy.com/city/yavatmal"
              },
              {
                "text": "Shivpuri",
                "link": "https://www.swiggy.com/city/shivpuri"
              },
              {
                "text": "Moga",
                "link": "https://www.swiggy.com/city/moga"
              },
              {
                "text": "Abohar",
                "link": "https://www.swiggy.com/city/abohar"
              },
              {
                "text": "Adoni",
                "link": "https://www.swiggy.com/city/adoni"
              },
              {
                "text": "Madanapalle",
                "link": "https://www.swiggy.com/city/madanapalle"
              },
              {
                "text": "Tiruvannamalai",
                "link": "https://www.swiggy.com/city/tiruvannamalai"
              },
              {
                "text": "Satara",
                "link": "https://www.swiggy.com/city/satara"
              },
              {
                "text": "Ambur",
                "link": "https://www.swiggy.com/city/ambur"
              },
              {
                "text": "Karimnagar",
                "link": "https://www.swiggy.com/city/karimnagar"
              },
              {
                "text": "Ratlam",
                "link": "https://www.swiggy.com/city/ratlam"
              },
              {
                "text": "Moradabad",
                "link": "https://www.swiggy.com/city/moradabad"
              },
              {
                "text": "Machilipatnam",
                "link": "https://www.swiggy.com/city/machilipatnam"
              },
              {
                "text": "Ongole",
                "link": "https://www.swiggy.com/city/ongole"
              },
              {
                "text": "Kottayam",
                "link": "https://www.swiggy.com/city/kottayam"
              },
              {
                "text": "Darbhanga",
                "link": "https://www.swiggy.com/city/darbhanga"
              },
              {
                "text": "Kurukshetra",
                "link": "https://www.swiggy.com/city/kurukshetra"
              },
              {
                "text": "Unnao",
                "link": "https://www.swiggy.com/city/unnao"
              },
              {
                "text": "Bulandshahr",
                "link": "https://www.swiggy.com/city/bulandshahr"
              },
              {
                "text": "Durgapur",
                "link": "https://www.swiggy.com/city/durgapur"
              },
              {
                "text": "Siliguri",
                "link": "https://www.swiggy.com/city/siliguri"
              },
              {
                "text": "Pali",
                "link": "https://www.swiggy.com/city/pali"
              },
              {
                "text": "Tadepalligudem",
                "link": "https://www.swiggy.com/city/tadepalligudem"
              },
              {
                "text": "Ramagundam",
                "link": "https://www.swiggy.com/city/ramagundam"
              },
              {
                "text": "Mahbubnagar",
                "link": "https://www.swiggy.com/city/mahbubnagar"
              },
              {
                "text": "Bhiwani",
                "link": "https://www.swiggy.com/city/bhiwani"
              },
              {
                "text": "Cuddalore",
                "link": "https://www.swiggy.com/city/cuddalore"
              },
              {
                "text": "Kaithal",
                "link": "https://www.swiggy.com/city/kaithal"
              },
              {
                "text": "Jagtial",
                "link": "https://www.swiggy.com/city/jagtial"
              },
              {
                "text": "Palakkad",
                "link": "https://www.swiggy.com/city/palakkad"
              },
              {
                "text": "Guna",
                "link": "https://www.swiggy.com/city/guna"
              },
              {
                "text": "Kumbakonam",
                "link": "https://www.swiggy.com/city/kumbakonam"
              },
              {
                "text": "Maunath Bhanjan",
                "link": "https://www.swiggy.com/city/maunath-bhanjan"
              },
              {
                "text": "Baripada",
                "link": "https://www.swiggy.com/city/baripada"
              },
              {
                "text": "Orai",
                "link": "https://www.swiggy.com/city/orai"
              },
              {
                "text": "Bhadrak",
                "link": "https://www.swiggy.com/city/bhadrak"
              },
              {
                "text": "Batala",
                "link": "https://www.swiggy.com/city/batala"
              },
              {
                "text": "Firozpur",
                "link": "https://www.swiggy.com/city/firozpur"
              },
              {
                "text": "Barnala",
                "link": "https://www.swiggy.com/city/barnala"
              },
              {
                "text": "Raigarh",
                "link": "https://www.swiggy.com/city/raigarh"
              },
              {
                "text": "Nagaon",
                "link": "https://www.swiggy.com/city/nagaon"
              },
              {
                "text": "Mainpuri",
                "link": "https://www.swiggy.com/city/mainpuri"
              },
              {
                "text": "Balurghat",
                "link": "https://www.swiggy.com/city/balurghat"
              },
              {
                "text": "Giridih",
                "link": "https://www.swiggy.com/city/giridih"
              },
              {
                "text": "Ghazipur",
                "link": "https://www.swiggy.com/city/ghazipur"
              },
              {
                "text": "Jagdalpur",
                "link": "https://www.swiggy.com/city/jagdalpur"
              },
              {
                "text": "Vidisha",
                "link": "https://www.swiggy.com/city/vidisha"
              },
              {
                "text": "Dimapur",
                "link": "https://www.swiggy.com/city/dimapur"
              },
              {
                "text": "Shikohabad",
                "link": "https://www.swiggy.com/city/shikohabad"
              },
              {
                "text": "Imphal",
                "link": "https://www.swiggy.com/city/imphal"
              },
              {
                "text": "Lakhimpur",
                "link": "https://www.swiggy.com/city/lakhimpur"
              },
              {
                "text": "Rudrapur",
                "link": "https://www.swiggy.com/city/rudrapur"
              },
              {
                "text": "Ambikapur",
                "link": "https://www.swiggy.com/city/ambikapur"
              },
              {
                "text": "Rae Bareli",
                "link": "https://www.swiggy.com/city/rae-bareli"
              },
              {
                "text": "Tinsukia",
                "link": "https://www.swiggy.com/city/tinsukia"
              },
              {
                "text": "Rajapalayam",
                "link": "https://www.swiggy.com/city/rajapalayam"
              },
              {
                "text": "Rajnandgaon",
                "link": "https://www.swiggy.com/city/rajnandgaon"
              },
              {
                "text": "Kashipur",
                "link": "https://www.swiggy.com/city/kashipur"
              },
              {
                "text": "Ranibennur",
                "link": "https://www.swiggy.com/city/ranibennur"
              },
              {
                "text": "Burhanpur",
                "link": "https://www.swiggy.com/city/burhanpur"
              },
              {
                "text": "Bhadravati",
                "link": "https://www.swiggy.com/city/bhadravati"
              },
              {
                "text": "Chittoor",
                "link": "https://www.swiggy.com/city/chittoor"
              },
              {
                "text": "Pudukkottai",
                "link": "https://www.swiggy.com/city/pudukkottai"
              },
              {
                "text": "Hardoi",
                "link": "https://www.swiggy.com/city/hardoi"
              },
              {
                "text": "Basti",
                "link": "https://www.swiggy.com/city/basti"
              },
              {
                "text": "Karaikkudi",
                "link": "https://www.swiggy.com/city/karaikkudi"
              },
              {
                "text": "Lalitpur",
                "link": "https://www.swiggy.com/city/lalitpur"
              },
              {
                "text": "Hospet",
                "link": "https://www.swiggy.com/city/hospet"
              },
              {
                "text": "Budaun",
                "link": "https://www.swiggy.com/city/budaun"
              },
              {
                "text": "Neemuch",
                "link": "https://www.swiggy.com/city/neemuch"
              },
              {
                "text": "Pilibhit",
                "link": "https://www.swiggy.com/city/pilibhit"
              },
              {
                "text": "Barshi",
                "link": "https://www.swiggy.com/city/barshi"
              },
              {
                "text": "Sri Ganganagar",
                "link": "https://www.swiggy.com/city/sri-ganganagar"
              },
              {
                "text": "Wardha",
                "link": "https://www.swiggy.com/city/wardha"
              },
              {
                "text": "Sehore",
                "link": "https://www.swiggy.com/city/sehore"
              },
              {
                "text": "Bhimavaram",
                "link": "https://www.swiggy.com/city/bhimavaram"
              },
              {
                "text": "Hanumangarh",
                "link": "https://www.swiggy.com/city/hanumangarh"
              },
              {
                "text": "Pathankot",
                "link": "https://www.swiggy.com/city/pathankot"
              },
              {
                "text": "Puri",
                "link": "https://www.swiggy.com/city/puri"
              },
              {
                "text": "Fatehpur",
                "link": "https://www.swiggy.com/city/fatehpur"
              },
              {
                "text": "Surendranagar Dudhrej",
                "link": "https://www.swiggy.com/city/surendranagar-dudhrej"
              },
              {
                "text": "Jamnagar",
                "link": "https://www.swiggy.com/city/jamnagar"
              },
              {
                "text": "Bhuj",
                "link": "https://www.swiggy.com/city/bhuj"
              },
              {
                "text": "Gandhidham",
                "link": "https://www.swiggy.com/city/gandhidham"
              },
              {
                "text": "Bharuch",
                "link": "https://www.swiggy.com/city/bharuch"
              },
              {
                "text": "Navsari",
                "link": "https://www.swiggy.com/city/navsari"
              },
              {
                "text": "Amreli",
                "link": "https://www.swiggy.com/city/amreli"
              },
              {
                "text": "Palanpur",
                "link": "https://www.swiggy.com/city/palanpur"
              },
              {
                "text": "Bhilwara",
                "link": "https://www.swiggy.com/city/bhilwara"
              },
              {
                "text": "Suratgarh",
                "link": "https://www.swiggy.com/city/suratgarh"
              },
              {
                "text": "Sikar",
                "link": "https://www.swiggy.com/city/sikar"
              },
              {
                "text": "Churu",
                "link": "https://www.swiggy.com/city/churu"
              },
              {
                "text": "Alwar",
                "link": "https://www.swiggy.com/city/alwar"
              },
              {
                "text": "Bhiwadi",
                "link": "https://www.swiggy.com/city/bhiwadi"
              },
              {
                "text": "Bharatpur",
                "link": "https://www.swiggy.com/city/bharatpur"
              },
              {
                "text": "Mount Abu",
                "link": "https://www.swiggy.com/city/mount-abu"
              },
              {
                "text": "Bundi",
                "link": "https://www.swiggy.com/city/bundi"
              },
              {
                "text": "Sawai Madhopur",
                "link": "https://www.swiggy.com/city/sawai-madhopur"
              },
              {
                "text": "Purulia",
                "link": "https://www.swiggy.com/city/purulia"
              },
              {
                "text": "Bardhaman",
                "link": "https://www.swiggy.com/city/bardhaman"
              },
              {
                "text": "Raniganj",
                "link": "https://www.swiggy.com/city/raniganj"
              },
              {
                "text": "Darjeeling",
                "link": "https://www.swiggy.com/city/darjeeling"
              },
              {
                "text": "Jalpaiguri",
                "link": "https://www.swiggy.com/city/jalpaiguri"
              },
              {
                "text": "Chittorgarh",
                "link": "https://www.swiggy.com/city/chittorgarh"
              },
              {
                "text": "Dholpur",
                "link": "https://www.swiggy.com/city/dholpur"
              },
              {
                "text": "Uluberia",
                "link": "https://www.swiggy.com/city/uluberia"
              },
              {
                "text": "Nabadwip",
                "link": "https://www.swiggy.com/city/nabadwip"
              },
              {
                "text": "Bongaon",
                "link": "https://www.swiggy.com/city/bongaon"
              },
              {
                "text": "Kanchrapara",
                "link": "https://www.swiggy.com/city/kanchrapara"
              },
              {
                "text": "Habra",
                "link": "https://www.swiggy.com/city/habra"
              },
              {
                "text": "Firozabad",
                "link": "https://www.swiggy.com/city/firozabad"
              },
              {
                "text": "Nalgonda",
                "link": "https://www.swiggy.com/city/nalgonda"
              },
              {
                "text": "Chandrapur",
                "link": "https://www.swiggy.com/city/chandrapur"
              },
              {
                "text": "Bijapur",
                "link": "https://www.swiggy.com/city/bijapur"
              },
              {
                "text": "Bhusawal",
                "link": "https://www.swiggy.com/city/bhusawal"
              },
              {
                "text": "Raichur",
                "link": "https://www.swiggy.com/city/raichur"
              },
              {
                "text": "Bahraich",
                "link": "https://www.swiggy.com/city/bahraich"
              },
              {
                "text": "Azamgarh",
                "link": "https://www.swiggy.com/city/azamgarh"
              },
              {
                "text": "Bahadurgarh",
                "link": "https://www.swiggy.com/city/bahadurgarh"
              },
              {
                "text": "Jind",
                "link": "https://www.swiggy.com/city/jind"
              },
              {
                "text": "Rewari",
                "link": "https://www.swiggy.com/city/rewari"
              },
              {
                "text": "Palwal",
                "link": "https://www.swiggy.com/city/palwal"
              },
              {
                "text": "Hathras",
                "link": "https://www.swiggy.com/city/hathras"
              },
              {
                "text": "Sambalpur",
                "link": "https://www.swiggy.com/city/sambalpur"
              },
              {
                "text": "Banda",
                "link": "https://www.swiggy.com/city/banda"
              },
              {
                "text": "Hoshiarpur",
                "link": "https://www.swiggy.com/city/hoshiarpur"
              },
              {
                "text": "Faridkot",
                "link": "https://www.swiggy.com/city/faridkot"
              },
              {
                "text": "Mandsaur",
                "link": "https://www.swiggy.com/city/mandsaur"
              },
              {
                "text": "Suryapet",
                "link": "https://www.swiggy.com/city/suryapet"
              },
              {
                "text": "Adilabad",
                "link": "https://www.swiggy.com/city/adilabad"
              },
              {
                "text": "Narasaraopet",
                "link": "https://www.swiggy.com/city/narasaraopet"
              },
              {
                "text": "Faizabad",
                "link": "https://www.swiggy.com/city/faizabad"
              },
              {
                "text": "Tadpatri",
                "link": "https://www.swiggy.com/city/tadpatri"
              },
              {
                "text": "Gonda",
                "link": "https://www.swiggy.com/city/gonda"
              },
              {
                "text": "Mughalsarai",
                "link": "https://www.swiggy.com/city/mughalsarai"
              },
              {
                "text": "Medinipur",
                "link": "https://www.swiggy.com/city/medinipur"
              },
              {
                "text": "Nagda",
                "link": "https://www.swiggy.com/city/nagda"
              },
              {
                "text": "Raiganj",
                "link": "https://www.swiggy.com/city/raiganj"
              },
              {
                "text": "Deoria City",
                "link": "https://www.swiggy.com/city/deoria-city"
              },
              {
                "text": "Sultanpur",
                "link": "https://www.swiggy.com/city/sultanpur"
              },
              {
                "text": "Shamli",
                "link": "https://www.swiggy.com/city/shamli"
              },
              {
                "text": "Krishnanagar",
                "link": "https://www.swiggy.com/city/krishnanagar"
              },
              {
                "text": "Ballia",
                "link": "https://www.swiggy.com/city/ballia"
              },
              {
                "text": "Guntakal",
                "link": "https://www.swiggy.com/city/guntakal"
              },
              {
                "text": "Miryalaguda",
                "link": "https://www.swiggy.com/city/miryalaguda"
              },
              {
                "text": "Etah",
                "link": "https://www.swiggy.com/city/etah"
              },
              {
                "text": "Berhampore",
                "link": "https://www.swiggy.com/city/berhampore"
              },
              {
                "text": "Gudivada",
                "link": "https://www.swiggy.com/city/gudivada"
              },
              {
                "text": "Haldia",
                "link": "https://www.swiggy.com/city/haldia"
              },
              {
                "text": "Santipur",
                "link": "https://www.swiggy.com/city/santipur"
              },
              {
                "text": "Basirhat",
                "link": "https://www.swiggy.com/city/basirhat"
              },
              {
                "text": "Udgir",
                "link": "https://www.swiggy.com/city/udgir"
              },
              {
                "text": "Proddatur",
                "link": "https://www.swiggy.com/city/proddatur"
              },
              {
                "text": "Nagapattinam",
                "link": "https://www.swiggy.com/city/nagapattinam"
              },
              {
                "text": "Chikmagalur",
                "link": "https://www.swiggy.com/city/chikmagalur"
              },
              {
                "text": "Chandausi",
                "link": "https://www.swiggy.com/city/chandausi"
              },
              {
                "text": "Bhind",
                "link": "https://www.swiggy.com/city/bhind"
              },
              {
                "text": "Mandya",
                "link": "https://www.swiggy.com/city/mandya"
              },
              {
                "text": "Bagalkot",
                "link": "https://www.swiggy.com/city/bagalkot"
              },
              {
                "text": "Nandurbar",
                "link": "https://www.swiggy.com/city/nandurbar"
              },
              {
                "text": "Chitradurga",
                "link": "https://www.swiggy.com/city/chitradurga"
              },
              {
                "text": "Osmanabad",
                "link": "https://www.swiggy.com/city/osmanabad"
              },
              {
                "text": "Modinagar",
                "link": "https://www.swiggy.com/city/modinagar"
              },
              {
                "text": "Gadag-Betigeri",
                "link": "https://www.swiggy.com/city/gadag-betigeri"
              },
              {
                "text": "Hoshangabad",
                "link": "https://www.swiggy.com/city/hoshangabad"
              },
              {
                "text": "Jaunpur",
                "link": "https://www.swiggy.com/city/jaunpur"
              },
              {
                "text": "Port Blair",
                "link": "https://www.swiggy.com/city/port-blair"
              },
              {
                "text": "Jorhat",
                "link": "https://www.swiggy.com/city/jorhat"
              },
              {
                "text": "Nandyal",
                "link": "https://www.swiggy.com/city/nandyal"
              },
              {
                "text": "Biharsharif",
                "link": "https://www.swiggy.com/city/biharsharif"
              },
              {
                "text": "Buxar",
                "link": "https://www.swiggy.com/city/buxar"
              },
              {
                "text": "Siwan",
                "link": "https://www.swiggy.com/city/siwan"
              },
              {
                "text": "Dehri",
                "link": "https://www.swiggy.com/city/dehri"
              },
              {
                "text": "Bettiah",
                "link": "https://www.swiggy.com/city/bettiah"
              },
              {
                "text": "Kishanganj",
                "link": "https://www.swiggy.com/city/kishanganj"
              },
              {
                "text": "Saharsa",
                "link": "https://www.swiggy.com/city/saharsa"
              },
              {
                "text": "Hajipur",
                "link": "https://www.swiggy.com/city/hajipur"
              },
              {
                "text": "Motihari",
                "link": "https://www.swiggy.com/city/motihari"
              },
              {
                "text": "Sasaram",
                "link": "https://www.swiggy.com/city/sasaram"
              },
              {
                "text": "Munger",
                "link": "https://www.swiggy.com/city/munger"
              },
              {
                "text": "Katihar",
                "link": "https://www.swiggy.com/city/katihar"
              },
              {
                "text": "Arrah",
                "link": "https://www.swiggy.com/city/arrah"
              },
              {
                "text": "Srikakulam",
                "link": "https://www.swiggy.com/city/srikakulam"
              },
              {
                "text": "Begusarai",
                "link": "https://www.swiggy.com/city/begusarai"
              },
              {
                "text": "Neyveli",
                "link": "https://www.swiggy.com/city/neyveli"
              },
              {
                "text": "Waidhan",
                "link": "https://www.swiggy.com/city/waidhan"
              },
              {
                "text": "Markapur",
                "link": "https://www.swiggy.com/city/markapur"
              },
              {
                "text": "Chikkaballapur",
                "link": "https://www.swiggy.com/city/chikkaballapur"
              },
              {
                "text": "Bhatkal",
                "link": "https://www.swiggy.com/city/bhatkal"
              },
              {
                "text": "Gokak",
                "link": "https://www.swiggy.com/city/gokak"
              },
              {
                "text": "Itarsi",
                "link": "https://www.swiggy.com/city/itarsi"
              },
              {
                "text": "Dhar",
                "link": "https://www.swiggy.com/city/dhar"
              },
              {
                "text": "Chalisgaon",
                "link": "https://www.swiggy.com/city/chalisgaon"
              },
              {
                "text": "Thiruvallur",
                "link": "https://www.swiggy.com/city/thiruvallur"
              },
              {
                "text": "Namakkal",
                "link": "https://www.swiggy.com/city/namakkal"
              },
              {
                "text": "Dharmapuri",
                "link": "https://www.swiggy.com/city/dharmapuri"
              },
              {
                "text": "Bhandara",
                "link": "https://www.swiggy.com/city/bhandara"
              },
              {
                "text": "Virudhunagar",
                "link": "https://www.swiggy.com/city/virudhunagar"
              },
              {
                "text": "Siddipet",
                "link": "https://www.swiggy.com/city/siddipet"
              },
              {
                "text": "Gadwal",
                "link": "https://www.swiggy.com/city/gadwal"
              },
              {
                "text": "Bodhan-Rural",
                "link": "https://www.swiggy.com/city/bodhan-rural"
              },
              {
                "text": "Kamareddy",
                "link": "https://www.swiggy.com/city/kamareddy"
              },
              {
                "text": "Jhunjhunu",
                "link": "https://www.swiggy.com/city/jhunjhunu"
              },
              {
                "text": "Kapurthala",
                "link": "https://www.swiggy.com/city/kapurthala"
              },
              {
                "text": "Sangrur",
                "link": "https://www.swiggy.com/city/sangrur"
              },
              {
                "text": "Gurdaspur",
                "link": "https://www.swiggy.com/city/gurdaspur"
              },
              {
                "text": "Ramgarh",
                "link": "https://www.swiggy.com/city/ramgarh"
              },
              {
                "text": "Bantwal",
                "link": "https://www.swiggy.com/city/bantwal"
              },
              {
                "text": "Doddaballapura",
                "link": "https://www.swiggy.com/city/doddaballapura"
              },
              {
                "text": "Buldana",
                "link": "https://www.swiggy.com/city/buldana"
              },
              {
                "text": "Karad",
                "link": "https://www.swiggy.com/city/karad"
              },
              {
                "text": "Krishnagiri",
                "link": "https://www.swiggy.com/city/krishnagiri"
              },
              {
                "text": "Tiptur",
                "link": "https://www.swiggy.com/city/tiptur"
              },
              {
                "text": "Bhadrachalam",
                "link": "https://www.swiggy.com/city/bhadrachalam"
              },
              {
                "text": "Mancherial",
                "link": "https://www.swiggy.com/city/mancherial"
              },
              {
                "text": "Balrampur",
                "link": "https://www.swiggy.com/city/balrampur"
              },
              {
                "text": "Bharabanki",
                "link": "https://www.swiggy.com/city/bharabanki"
              },
              {
                "text": "Malout",
                "link": "https://www.swiggy.com/city/malout"
              },
              {
                "text": "Fatehgarh Sahib",
                "link": "https://www.swiggy.com/city/fatehgarh-sahib"
              },
              {
                "text": "Ropar",
                "link": "https://www.swiggy.com/city/ropar"
              },
              {
                "text": "Nangal",
                "link": "https://www.swiggy.com/city/nangal"
              },
              {
                "text": "Narnaul",
                "link": "https://www.swiggy.com/city/narnaul"
              },
              {
                "text": "Naraingarh",
                "link": "https://www.swiggy.com/city/naraingarh"
              },
              {
                "text": "Himmatnagar",
                "link": "https://www.swiggy.com/city/himmatnagar"
              },
              {
                "text": "Dausa",
                "link": "https://www.swiggy.com/city/dausa"
              },
              {
                "text": "Jahanabad",
                "link": "https://www.swiggy.com/city/jahanabad"
              },
              {
                "text": "Samastipur",
                "link": "https://www.swiggy.com/city/samastipur"
              },
              {
                "text": "Purnea",
                "link": "https://www.swiggy.com/city/purnea"
              },
              {
                "text": "Berhampur",
                "link": "https://www.swiggy.com/city/berhampur"
              },
              {
                "text": "Malda",
                "link": "https://www.swiggy.com/city/malda"
              },
              {
                "text": "Tuni",
                "link": "https://www.swiggy.com/city/tuni"
              },
              {
                "text": "Puttur",
                "link": "https://www.swiggy.com/city/puttur"
              },
              {
                "text": "Rayachoty",
                "link": "https://www.swiggy.com/city/rayachoty"
              },
              {
                "text": "Nirmal",
                "link": "https://www.swiggy.com/city/nirmal"
              },
              {
                "text": "Mirzapur",
                "link": "https://www.swiggy.com/city/mirzapur"
              },
              {
                "text": "Tanuku",
                "link": "https://www.swiggy.com/city/tanuku"
              },
              {
                "text": "Dahod",
                "link": "https://www.swiggy.com/city/dahod"
              },
              {
                "text": "Barmer",
                "link": "https://www.swiggy.com/city/barmer"
              },
              {
                "text": "Gangapur City",
                "link": "https://www.swiggy.com/city/gangapur-city"
              },
              {
                "text": "Mandi Gobindgarh",
                "link": "https://www.swiggy.com/city/mandi-gobindgarh"
              },
              {
                "text": "Tarn Taran Sahib",
                "link": "https://www.swiggy.com/city/tarn-taran-sahib"
              },
              {
                "text": "Nakodar",
                "link": "https://www.swiggy.com/city/nakodar"
              },
              {
                "text": "Ankleshwar",
                "link": "https://www.swiggy.com/city/ankleshwar"
              },
              {
                "text": "Vyara",
                "link": "https://www.swiggy.com/city/vyara"
              },
              {
                "text": "Bardoli",
                "link": "https://www.swiggy.com/city/bardoli"
              },
              {
                "text": "Halol",
                "link": "https://www.swiggy.com/city/halol"
              },
              {
                "text": "Bijnor",
                "link": "https://www.swiggy.com/city/bijnor"
              },
              {
                "text": "Sangamner",
                "link": "https://www.swiggy.com/city/sangamner"
              },
              {
                "text": "Baramati",
                "link": "https://www.swiggy.com/city/baramati"
              },
              {
                "text": "Betul",
                "link": "https://www.swiggy.com/city/betul"
              },
              {
                "text": "Chhatarpur",
                "link": "https://www.swiggy.com/city/chhatarpur"
              },
              {
                "text": "Balaghat",
                "link": "https://www.swiggy.com/city/balaghat"
              },
              {
                "text": "Sivakasi",
                "link": "https://www.swiggy.com/city/sivakasi"
              },
              {
                "text": "Viluppuram",
                "link": "https://www.swiggy.com/city/viluppuram"
              },
              {
                "text": "Ramanathapuram",
                "link": "https://www.swiggy.com/city/ramanathapuram"
              },
              {
                "text": "Sirsi",
                "link": "https://www.swiggy.com/city/sirsi"
              },
              {
                "text": "Theni",
                "link": "https://www.swiggy.com/city/theni"
              },
              {
                "text": "Karur",
                "link": "https://www.swiggy.com/city/karur"
              },
              {
                "text": "Karwar",
                "link": "https://www.swiggy.com/city/karwar"
              },
              {
                "text": "Sindhanur",
                "link": "https://www.swiggy.com/city/sindhanur"
              },
              {
                "text": "Kannur",
                "link": "https://www.swiggy.com/city/kannur"
              },
              {
                "text": "Noida 1",
                "link": "https://www.swiggy.com/city/noida-1"
              },
              {
                "text": "Thiruvalla",
                "link": "https://www.swiggy.com/city/thiruvalla"
              },
              {
                "text": "Thodupuzha",
                "link": "https://www.swiggy.com/city/thodupuzha"
              },
              {
                "text": "Kadiri",
                "link": "https://www.swiggy.com/city/kadiri"
              },
              {
                "text": "Kavali",
                "link": "https://www.swiggy.com/city/kavali"
              },
              {
                "text": "Tezpur",
                "link": "https://www.swiggy.com/city/tezpur"
              },
              {
                "text": "Kayamkulam",
                "link": "https://www.swiggy.com/city/kayamkulam"
              },
              {
                "text": "Kottarakkara",
                "link": "https://www.swiggy.com/city/kottarakkara"
              },
              {
                "text": "Mandi Dabwali",
                "link": "https://www.swiggy.com/city/mandi-dabwali"
              },
              {
                "text": "Fatehabad",
                "link": "https://www.swiggy.com/city/fatehabad"
              },
              {
                "text": "Jagraon",
                "link": "https://www.swiggy.com/city/jagraon"
              },
              {
                "text": "Mansa",
                "link": "https://www.swiggy.com/city/mansa"
              },
              {
                "text": "Pinjore City",
                "link": "https://www.swiggy.com/city/pinjore-city"
              },
              {
                "text": "Fazilka",
                "link": "https://www.swiggy.com/city/fazilka"
              },
              {
                "text": "Baddi",
                "link": "https://www.swiggy.com/city/baddi"
              },
              {
                "text": "Solan",
                "link": "https://www.swiggy.com/city/solan"
              },
              {
                "text": "Daltonganj",
                "link": "https://www.swiggy.com/city/daltonganj"
              },
              {
                "text": "Balangir",
                "link": "https://www.swiggy.com/city/balangir"
              },
              {
                "text": "Kothagudem",
                "link": "https://www.swiggy.com/city/kothagudem"
              },
              {
                "text": "Hansi",
                "link": "https://www.swiggy.com/city/hansi"
              },
              {
                "text": "Aurangabad_Bihar",
                "link": "https://www.swiggy.com/city/aurangabadbihar"
              },
              {
                "text": "Gopalganj",
                "link": "https://www.swiggy.com/city/gopalganj"
              },
              {
                "text": "Jharsuguda",
                "link": "https://www.swiggy.com/city/jharsuguda"
              },
              {
                "text": "Tohana",
                "link": "https://www.swiggy.com/city/tohana"
              },
              {
                "text": "Jhalawar",
                "link": "https://www.swiggy.com/city/jhalawar"
              },
              {
                "text": "Sivasagar",
                "link": "https://www.swiggy.com/city/sivasagar"
              },
              {
                "text": "Bagdogra",
                "link": "https://www.swiggy.com/city/bagdogra"
              },
              {
                "text": "Kendrapada",
                "link": "https://www.swiggy.com/city/kendrapada"
              },
              {
                "text": "Mallapuram (Do not Use)",
                "link": "https://www.swiggy.com/city/mallapuram-do-not-use"
              },
              {
                "text": "Veraval",
                "link": "https://www.swiggy.com/city/veraval"
              },
              {
                "text": "Daman",
                "link": "https://www.swiggy.com/city/daman"
              },
              {
                "text": "Chiplun",
                "link": "https://www.swiggy.com/city/chiplun"
              },
              {
                "text": "Silvassa",
                "link": "https://www.swiggy.com/city/silvassa"
              },
              {
                "text": "Lonavla",
                "link": "https://www.swiggy.com/city/lonavla"
              },
              {
                "text": "Bongaigaon",
                "link": "https://www.swiggy.com/city/bongaigaon"
              },
              {
                "text": "Golaghat",
                "link": "https://www.swiggy.com/city/golaghat"
              },
              {
                "text": "Duliajan",
                "link": "https://www.swiggy.com/city/duliajan"
              },
              {
                "text": "Bolpur",
                "link": "https://www.swiggy.com/city/bolpur"
              },
              {
                "text": "Madhubani",
                "link": "https://www.swiggy.com/city/madhubani"
              },
              {
                "text": "Balasore",
                "link": "https://www.swiggy.com/city/balasore"
              },
              {
                "text": "Palampur",
                "link": "https://www.swiggy.com/city/palampur"
              },
              {
                "text": "Kotdwar",
                "link": "https://www.swiggy.com/city/kotdwar"
              },
              {
                "text": "Koppal",
                "link": "https://www.swiggy.com/city/koppal"
              },
              {
                "text": "Chikhli",
                "link": "https://www.swiggy.com/city/chikhli"
              },
              {
                "text": "Dahanu",
                "link": "https://www.swiggy.com/city/dahanu"
              },
              {
                "text": "Itanagar",
                "link": "https://www.swiggy.com/city/itanagar"
              },
              {
                "text": "Rangpo",
                "link": "https://www.swiggy.com/city/rangpo"
              },
              {
                "text": "Aizawl",
                "link": "https://www.swiggy.com/city/aizawl"
              },
              {
                "text": "Gangtok",
                "link": "https://www.swiggy.com/city/gangtok"
              },
              {
                "text": "Mayiladuthurai",
                "link": "https://www.swiggy.com/city/mayiladuthurai"
              },
              {
                "text": "Kannauj",
                "link": "https://www.swiggy.com/city/kannauj"
              },
              {
                "text": "Cooch Behar",
                "link": "https://www.swiggy.com/city/cooch-behar"
              },
              {
                "text": "Palani",
                "link": "https://www.swiggy.com/city/palani"
              },
              {
                "text": "Bilimora",
                "link": "https://www.swiggy.com/city/bilimora"
              },
              {
                "text": "Boisar",
                "link": "https://www.swiggy.com/city/boisar"
              },
              {
                "text": "Kohima",
                "link": "https://www.swiggy.com/city/kohima"
              },
              {
                "text": "Naharlagun",
                "link": "https://www.swiggy.com/city/naharlagun"
              },
              {
                "text": "Dumka",
                "link": "https://www.swiggy.com/city/dumka"
              },
              {
                "text": "Rajsamand",
                "link": "https://www.swiggy.com/city/rajsamand"
              },
              {
                "text": "Gauriganj",
                "link": "https://www.swiggy.com/city/gauriganj"
              },
              {
                "text": "Bodinayakanur",
                "link": "https://www.swiggy.com/city/bodinayakanur"
              },
              {
                "text": "Bhawanipatna",
                "link": "https://www.swiggy.com/city/bhawanipatna"
              },
              {
                "text": "Baran",
                "link": "https://www.swiggy.com/city/baran"
              },
              {
                "text": "Narsinghpur",
                "link": "https://www.swiggy.com/city/narsinghpur"
              },
              {
                "text": "Kovilpatti",
                "link": "https://www.swiggy.com/city/kovilpatti"
              },
              {
                "text": "Pusad",
                "link": "https://www.swiggy.com/city/pusad"
              },
              {
                "text": "Kendujhar",
                "link": "https://www.swiggy.com/city/kendujhar"
              },
              {
                "text": "Manali",
                "link": "https://www.swiggy.com/city/manali"
              },
              {
                "text": "Diu",
                "link": "https://www.swiggy.com/city/diu"
              },
              {
                "text": "Khamgaon",
                "link": "https://www.swiggy.com/city/khamgaon"
              },
              {
                "text": "Ramanagara",
                "link": "https://www.swiggy.com/city/ramanagara"
              },
              {
                "text": "Alipurduar",
                "link": "https://www.swiggy.com/city/alipurduar"
              },
              {
                "text": "Almora",
                "link": "https://www.swiggy.com/city/almora"
              },
              {
                "text": "Jhargram",
                "link": "https://www.swiggy.com/city/jhargram"
              },
              {
                "text": "Arambagh",
                "link": "https://www.swiggy.com/city/arambagh"
              },
              {
                "text": "Bhadohi",
                "link": "https://www.swiggy.com/city/bhadohi"
              },
              {
                "text": "Tenkasi",
                "link": "https://www.swiggy.com/city/tenkasi"
              },
              {
                "text": "Srivilliputhur",
                "link": "https://www.swiggy.com/city/srivilliputhur"
              },
              {
                "text": "Chidambaram",
                "link": "https://www.swiggy.com/city/chidambaram"
              },
              {
                "text": "Rajgarh",
                "link": "https://www.swiggy.com/city/rajgarh"
              },
              {
                "text": "Pratapgarh",
                "link": "https://www.swiggy.com/city/pratapgarh"
              },
              {
                "text": "Washim",
                "link": "https://www.swiggy.com/city/washim"
              },
              {
                "text": "Raghunathpur",
                "link": "https://www.swiggy.com/city/raghunathpur"
              },
              {
                "text": "Suri",
                "link": "https://www.swiggy.com/city/suri"
              },
              {
                "text": "Kadayanallur",
                "link": "https://www.swiggy.com/city/kadayanallur"
              },
              {
                "text": "Thiruvarur",
                "link": "https://www.swiggy.com/city/thiruvarur"
              },
              {
                "text": "Ranaghat-WB",
                "link": "https://www.swiggy.com/city/ranaghat-wb"
              },
              {
                "text": "Wayanad",
                "link": "https://www.swiggy.com/city/wayanad"
              },
              {
                "text": "Perambalur",
                "link": "https://www.swiggy.com/city/perambalur"
              },
              {
                "text": "Paramakudi",
                "link": "https://www.swiggy.com/city/paramakudi"
              },
              {
                "text": "Bela Pratapgarh",
                "link": "https://www.swiggy.com/city/bela-pratapgarh"
              },
              {
                "text": "Mahoba",
                "link": "https://www.swiggy.com/city/mahoba"
              },
              {
                "text": "Sitamarhi",
                "link": "https://www.swiggy.com/city/sitamarhi"
              },
              {
                "text": "Chakdaha",
                "link": "https://www.swiggy.com/city/chakdaha"
              },
              {
                "text": "Khalilabad",
                "link": "https://www.swiggy.com/city/khalilabad"
              },
              {
                "text": "Pattukkottai",
                "link": "https://www.swiggy.com/city/pattukkottai"
              },
              {
                "text": "Tindivanam",
                "link": "https://www.swiggy.com/city/tindivanam"
              },
              {
                "text": "Tiruttani",
                "link": "https://www.swiggy.com/city/tiruttani"
              },
              {
                "text": "Gangarampur",
                "link": "https://www.swiggy.com/city/gangarampur"
              },
              {
                "text": "Dharapuram",
                "link": "https://www.swiggy.com/city/dharapuram"
              },
              {
                "text": "Arakkonam",
                "link": "https://www.swiggy.com/city/arakkonam"
              },
              {
                "text": "Sirkali",
                "link": "https://www.swiggy.com/city/sirkali"
              },
              {
                "text": "Mettupalayam",
                "link": "https://www.swiggy.com/city/mettupalayam"
              },
              {
                "text": "Digboi",
                "link": "https://www.swiggy.com/city/digboi"
              },
              {
                "text": "Biswanath Chariali",
                "link": "https://www.swiggy.com/city/biswanath-chariali"
              },
              {
                "text": "Nalbari",
                "link": "https://www.swiggy.com/city/nalbari"
              },
              {
                "text": "Shirdi city",
                "link": "https://www.swiggy.com/city/shirdi-city"
              },
              {
                "text": "Mukerian",
                "link": "https://www.swiggy.com/city/mukerian"
              },
              {
                "text": "Hosur",
                "link": "https://www.swiggy.com/city/hosur"
              },
              {
                "text": "Palakollu",
                "link": "https://www.swiggy.com/city/palakollu"
              },
              {
                "text": "Ravulapalem",
                "link": "https://www.swiggy.com/city/ravulapalem"
              },
              {
                "text": "Barh",
                "link": "https://www.swiggy.com/city/barh"
              },
              {
                "text": "Palghar",
                "link": "https://www.swiggy.com/city/palghar"
              },
              {
                "text": "Kushalnagar",
                "link": "https://www.swiggy.com/city/kushalnagar"
              },
              {
                "text": "Dungarpur",
                "link": "https://www.swiggy.com/city/dungarpur"
              },
              {
                "text": "Chaibasa",
                "link": "https://www.swiggy.com/city/chaibasa"
              },
              {
                "text": "Haveri",
                "link": "https://www.swiggy.com/city/haveri"
              },
              {
                "text": "Karaikal",
                "link": "https://www.swiggy.com/city/karaikal"
              },
              {
                "text": "Jjajjar",
                "link": "https://www.swiggy.com/city/jjajjar"
              },
              {
                "text": "Kokrajhar",
                "link": "https://www.swiggy.com/city/kokrajhar"
              },
              {
                "text": "Rangia",
                "link": "https://www.swiggy.com/city/rangia"
              },
              {
                "text": "Hamirpur",
                "link": "https://www.swiggy.com/city/hamirpur"
              },
              {
                "text": "Una",
                "link": "https://www.swiggy.com/city/una"
              },
              {
                "text": "Sulthan Bathery",
                "link": "https://www.swiggy.com/city/sulthan-bathery"
              },
              {
                "text": "Rayagada",
                "link": "https://www.swiggy.com/city/rayagada"
              },
              {
                "text": "Paradeep",
                "link": "https://www.swiggy.com/city/paradeep"
              },
              {
                "text": "Mandapeta",
                "link": "https://www.swiggy.com/city/mandapeta"
              },
              {
                "text": "Jamui",
                "link": "https://www.swiggy.com/city/jamui"
              },
              {
                "text": "Pilkhuwa",
                "link": "https://www.swiggy.com/city/pilkhuwa"
              },
              {
                "text": "Parvathipuram",
                "link": "https://www.swiggy.com/city/parvathipuram"
              },
              {
                "text": "Ambajogai",
                "link": "https://www.swiggy.com/city/ambajogai"
              },
              {
                "text": "Araria",
                "link": "https://www.swiggy.com/city/araria"
              },
              {
                "text": "North Lakhimpur",
                "link": "https://www.swiggy.com/city/north-lakhimpur"
              },
              {
                "text": "Rajampet",
                "link": "https://www.swiggy.com/city/rajampet"
              },
              {
                "text": "Udumalaipettai",
                "link": "https://www.swiggy.com/city/udumalaipettai"
              },
              {
                "text": "Tirupattur",
                "link": "https://www.swiggy.com/city/tirupattur"
              },
              {
                "text": "Hojai",
                "link": "https://www.swiggy.com/city/hojai"
              },
              {
                "text": "Khagaria",
                "link": "https://www.swiggy.com/city/khagaria"
              },
              {
                "text": "Dasuya",
                "link": "https://www.swiggy.com/city/dasuya"
              },
              {
                "text": "Gudur",
                "link": "https://www.swiggy.com/city/gudur"
              },
              {
                "text": "Sullurpeta",
                "link": "https://www.swiggy.com/city/sullurpeta"
              },
              {
                "text": "Piler",
                "link": "https://www.swiggy.com/city/piler"
              },
              {
                "text": "SankaranKoil",
                "link": "https://www.swiggy.com/city/sankarankoil"
              },
              {
                "text": "Nabha",
                "link": "https://www.swiggy.com/city/nabha"
              },
              {
                "text": "LPU - Phagwara",
                "link": "https://www.swiggy.com/city/lpu-phagwara"
              },
              {
                "text": "Jangipur",
                "link": "https://www.swiggy.com/city/jangipur"
              },
              {
                "text": "Roha",
                "link": "https://www.swiggy.com/city/roha"
              }
            ],
            "id": "footer_content"
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.seo.widgets.v1.MetaContext",
            "citySlug": "ahmedabad",
            "lat": "23.2156354",
            "lng": "72.63694149999999",
            "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36",
            "gandalfRequest": "{\"sortAttribute\":\"relevance\",\"isFiltered\":false,\"queryId\":\"seo-data-afce66f9-fd2f-473a-b304-91af265614ea\",\"seoParams\":{\"apiName\":\"FoodHomePage\",\"brandId\":\"\",\"seoUrl\":\"www.swiggy.com\",\"pageType\":\"FOOD_HOME_PAGE\"}}",
            "id": "meta_data",
            "metaInfo": {
              "pageType": "FOOD_HOME_PAGE",
              "pageTitle": "Food home delivery | Swiggy"
            },
            "screenType": "filteredCollection",
            "seoParams": {
              "apiName": "FoodHomePage",
              "seoUrl": "www.swiggy.com",
              "pageType": "FOOD_HOME_PAGE"
            }
          }
        }
      }
    ],
    "firstOffsetRequest": true,
    "cacheExpiryTime": 240,
    "nextFetch": 1
  },
  "tid": "84d38dfe-7761-4a0f-b1f0-e5034a49fb87",
  "sid": "9gg024a7-d1e3-4ed4-becb-e637f1baa83c",
  "deviceId": "3aeebdf5-6875-cd00-1067-091ad59694da",
  "csrfToken": "raxkTGWIWWRZ-Jtavufzrnu0vIc497wi2X0byf-A"
};
      

























// export const Restaurant_list=[
//     {
//       "info": {
//         "id": "168122",
//         "name": "McDonald's",
//         "cloudinaryImageId": "ee5f8e06b300efc07c9fe3f4df40dfc4",
//         "locality": "SARGASAN CROSS ROAD",
//         "areaName": "GANDHINAGAR",
//         "costForTwo": "₹400 for two",
//         "cuisines": [
//           "Burgers",
//           "Beverages",
//           "Cafe",
//           "Desserts"
//         ],
//         "avgRating": 4.1,
//         "feeDetails": {
//           "restaurantId": "168122",
//           "fees": [
//             {
//               "name": "BASE_DISTANCE",
//               "fee": 3400
//             },
//             {
//               "name": "BASE_TIME"
//             },
//             {
//               "name": "ANCILLARY_SURGE_FEE"
//             }
//           ],
//           "totalFee": 3400
//         },
//         "parentId": "630",
//         "avgRatingString": "4.1",
//         "totalRatingsString": "10K+",
//         "sla": {
//           "deliveryTime": 23,
//           "lastMileTravel": 4.6,
//           "serviceability": "SERVICEABLE",
//           "slaString": "23 mins",
//           "lastMileTravelString": "4.6 km",
//           "iconType": "ICON_TYPE_EMPTY"
//         },
//         "availability": {
//           "nextCloseTime": "2023-09-06 00:45:00",
//           "opened": true
//         },
//         "badges": {
          
//         },
//         "isOpen": true,
//         "type": "F",
//         "badgesV2": {
//           "entityBadges": {
//             "imageBased": {
              
//             },
//             "textBased": {
              
//             },
//             "textExtendedBadges": {
              
//             }
//           }
//         },
//         "aggregatedDiscountInfoV3": {
//           "header": "10% OFF",
//           "subHeader": "ABOVE ₹999",
//           "discountTag": "FLAT DEAL"
//         },
//         "differentiatedUi": {
//           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//           "differentiatedUiMediaDetails": {
//             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//             "lottie": {
              
//             },
//             "video": {
              
//             }
//           }
//         },
//         "reviewsSummary": {
          
//         },
//         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//         "restaurantOfferPresentationInfo": {
          
//         }
//       },
//       "analytics": {
        
//       },
//       "cta": {
//         "link": "https://www.swiggy.com/restaurants/mcdonalds-sargasan-cross-road-gandhinagar-ahmedabad-168122",
//         "type": "WEBLINK"
//       }
//     },
//     {
//       "info": {
//         "id": "45169",
//         "name": "Gwalia Sweets & Fast Food",
//         "cloudinaryImageId": "yeiqsiliyvt0k7arhvqf",
//         "locality": "Super Mall 2",
//         "areaName": "Infocity",
//         "costForTwo": "₹300 for two",
//         "cuisines": [
//           "Sweets",
//           "Snacks",
//           "Thalis",
//           "Desserts"
//         ],
//         "avgRating": 4,
//         "veg": true,
//         "feeDetails": {
//           "restaurantId": "45169",
//           "fees": [
//             {
//               "name": "BASE_DISTANCE",
//               "fee": 2400
//             },
//             {
//               "name": "BASE_TIME"
//             },
//             {
//               "name": "ANCILLARY_SURGE_FEE"
//             }
//           ],
//           "totalFee": 2400
//         },
//         "parentId": "92340",
//         "avgRatingString": "4.0",
//         "totalRatingsString": "1K+",
//         "sla": {
//           "deliveryTime": 16,
//           "lastMileTravel": 2.8,
//           "serviceability": "SERVICEABLE",
//           "slaString": "16 mins",
//           "lastMileTravelString": "2.8 km",
//           "iconType": "ICON_TYPE_EMPTY"
//         },
//         "availability": {
//           "nextCloseTime": "2023-09-05 22:30:00",
//           "opened": true
//         },
//         "badges": {
          
//         },
//         "isOpen": true,
//         "aggregatedDiscountInfoV2": {
          
//         },
//         "type": "F",
//         "badgesV2": {
//           "entityBadges": {
//             "imageBased": {
              
//             },
//             "textBased": {
              
//             },
//             "textExtendedBadges": {
              
//             }
//           }
//         },
//         "differentiatedUi": {
//           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//           "differentiatedUiMediaDetails": {
//             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//             "lottie": {
              
//             },
//             "video": {
              
//             }
//           }
//         },
//         "reviewsSummary": {
          
//         },
//         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//         "restaurantOfferPresentationInfo": {
          
//         }
//       },
//       "analytics": {
        
//       },
//       "cta": {
//         "link": "https://www.swiggy.com/restaurants/gwalia-sweets-and-fast-food-super-mall-2-infocity-ahmedabad-45169",
//         "type": "WEBLINK"
//       }
//     },
//     {
//       "info": {
//         "id": "45320",
//         "name": "Subway",
//         "cloudinaryImageId": "1ace5fa65eff3e1223feb696c956b38b",
//         "locality": "Super Mall 1",
//         "areaName": "Infocity",
//         "costForTwo": "₹350 for two",
//         "cuisines": [
//           "Healthy Food",
//           "Salads",
//           "Snacks",
//           "Desserts",
//           "Beverages"
//         ],
//         "avgRating": 3.9,
//         "feeDetails": {
//           "restaurantId": "45320",
//           "fees": [
//             {
//               "name": "BASE_DISTANCE",
//               "fee": 2900
//             },
//             {
//               "name": "BASE_TIME"
//             },
//             {
//               "name": "ANCILLARY_SURGE_FEE"
//             }
//           ],
//           "totalFee": 2900
//         },
//         "parentId": "2",
//         "avgRatingString": "3.9",
//         "totalRatingsString": "5K+",
//         "sla": {
//           "deliveryTime": 20,
//           "lastMileTravel": 3,
//           "serviceability": "SERVICEABLE",
//           "slaString": "20 mins",
//           "lastMileTravelString": "3.0 km",
//           "iconType": "ICON_TYPE_EMPTY"
//         },
//         "availability": {
//           "nextCloseTime": "2023-09-05 23:00:00",
//           "opened": true
//         },
//         "badges": {
          
//         },
//         "isOpen": true,
//         "aggregatedDiscountInfoV2": {
          
//         },
//         "type": "F",
//         "badgesV2": {
//           "entityBadges": {
//             "imageBased": {
              
//             },
//             "textBased": {
              
//             },
//             "textExtendedBadges": {
              
//             }
//           }
//         },
//         "differentiatedUi": {
//           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//           "differentiatedUiMediaDetails": {
//             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//             "lottie": {
              
//             },
//             "video": {
              
//             }
//           }
//         },
//         "reviewsSummary": {
          
//         },
//         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//         "restaurantOfferPresentationInfo": {
          
//         }
//       },
//       "analytics": {
        
//       },
//       "cta": {
//         "link": "https://www.swiggy.com/restaurants/subway-super-mall-1-infocity-ahmedabad-45320",
//         "type": "WEBLINK"
//       }
//     },
//     {
//       "info": {
//         "id": "395364",
//         "name": "McDonald's Gourmet Burger Collection",
//         "cloudinaryImageId": "jqb5ktjknm4dxggyylfb",
//         "locality": "GANDHINAGAR, SARGASAN CROSS ROAD",
//         "areaName": "Gandhinagar",
//         "costForTwo": "₹500 for two",
//         "cuisines": [
//           "Burgers",
//           "Beverages",
//           "Cafe",
//           "Desserts"
//         ],
//         "avgRating": 4,
//         "feeDetails": {
//           "restaurantId": "395364",
//           "fees": [
//             {
//               "name": "BASE_DISTANCE",
//               "fee": 5400
//             },
//             {
//               "name": "BASE_TIME"
//             },
//             {
//               "name": "ANCILLARY_SURGE_FEE"
//             }
//           ],
//           "totalFee": 5400
//         },
//         "parentId": "10761",
//         "avgRatingString": "4.0",
//         "totalRatingsString": "100+",
//         "sla": {
//           "deliveryTime": 25,
//           "lastMileTravel": 4.6,
//           "serviceability": "SERVICEABLE",
//           "slaString": "25 mins",
//           "lastMileTravelString": "4.6 km",
//           "iconType": "ICON_TYPE_EMPTY"
//         },
//         "availability": {
//           "nextCloseTime": "2023-09-06 00:45:00",
//           "opened": true
//         },
//         "badges": {
          
//         },
//         "isOpen": true,
//         "aggregatedDiscountInfoV2": {
          
//         },
//         "type": "F",
//         "badgesV2": {
//           "entityBadges": {
//             "imageBased": {
              
//             },
//             "textBased": {
              
//             },
//             "textExtendedBadges": {
              
//             }
//           }
//         },
//         "differentiatedUi": {
//           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//           "differentiatedUiMediaDetails": {
//             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//             "lottie": {
              
//             },
//             "video": {
              
//             }
//           }
//         },
//         "reviewsSummary": {
          
//         },
//         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//         "restaurantOfferPresentationInfo": {
          
//         }
//       },
//       "analytics": {
        
//       },
//       "cta": {
//         "link": "https://www.swiggy.com/restaurants/mcdonalds-gourmet-burger-collection-sargasan-cross-road-gandhinagar-ahmedabad-395364",
//         "type": "WEBLINK"
//       }
//     },
//     {
//       "info": {
//         "id": "240796",
//         "name": "Pizza Hut",
//         "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
//         "locality": "Kudasan Road",
//         "areaName": "Gandhinagar",
//         "costForTwo": "₹600 for two",
//         "cuisines": [
//           "Pizzas"
//         ],
//         "avgRating": 3.8,
//         "feeDetails": {
//           "restaurantId": "240796",
//           "fees": [
//             {
//               "name": "BASE_DISTANCE",
//               "fee": 3400
//             },
//             {
//               "name": "BASE_TIME"
//             },
//             {
//               "name": "ANCILLARY_SURGE_FEE"
//             }
//           ],
//           "totalFee": 3400
//         },
//         "parentId": "721",
//         "avgRatingString": "3.8",
//         "totalRatingsString": "1K+",
//         "sla": {
//           "deliveryTime": 25,
//           "lastMileTravel": 4.2,
//           "serviceability": "SERVICEABLE",
//           "slaString": "25 mins",
//           "lastMileTravelString": "4.2 km",
//           "iconType": "ICON_TYPE_EMPTY"
//         },
//         "availability": {
//           "nextCloseTime": "2023-09-06 01:00:00",
//           "opened": true
//         },
//         "badges": {
          
//         },
//         "isOpen": true,
//         "type": "F",
//         "badgesV2": {
//           "entityBadges": {
//             "imageBased": {
              
//             },
//             "textBased": {
              
//             },
//             "textExtendedBadges": {
              
//             }
//           }
//         },
//         "aggregatedDiscountInfoV3": {
//           "header": "FREE ITEM"
//         },
//         "differentiatedUi": {
//           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//           "differentiatedUiMediaDetails": {
//             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//             "lottie": {
              
//             },
//             "video": {
              
//             }
//           }
//         },
//         "reviewsSummary": {
          
//         },
//         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//         "restaurantOfferPresentationInfo": {
          
//         }
//       },
//       "analytics": {
        
//       },
//       "cta": {
//         "link": "https://www.swiggy.com/restaurants/pizza-hut-kudasan-road-gandhinagar-ahmedabad-240796",
//         "type": "WEBLINK"
//       }
//     },
//     {
//       "info": {
//         "id": "62992",
//         "name": "LunchBox - Meals and Thalis",
//         "cloudinaryImageId": "ywvtndu8hk3mblk14l6q",
//         "locality": "Near Aashka Multispeciality Hospital",
//         "areaName": "Gandhinagar",
//         "costForTwo": "₹200 for two",
//         "cuisines": [
//           "Biryani",
//           "North Indian",
//           "Punjabi",
//           "Healthy Food",
//           "Desserts",
//           "Beverages"
//         ],
//         "avgRating": 3.9,
//         "feeDetails": {
//           "restaurantId": "62992",
//           "fees": [
//             {
//               "name": "BASE_DISTANCE",
//               "fee": 3900
//             },
//             {
//               "name": "BASE_TIME"
//             },
//             {
//               "name": "ANCILLARY_SURGE_FEE"
//             }
//           ],
//           "totalFee": 3900
//         },
//         "parentId": "4925",
//         "avgRatingString": "3.9",
//         "totalRatingsString": "10K+",
//         "sla": {
//           "deliveryTime": 27,
//           "lastMileTravel": 5,
//           "serviceability": "SERVICEABLE",
//           "slaString": "27 mins",
//           "lastMileTravelString": "5.0 km",
//           "iconType": "ICON_TYPE_EMPTY"
//         },
//         "availability": {
//           "nextCloseTime": "2023-09-06 01:00:00",
//           "opened": true
//         },
//         "badges": {
          
//         },
//         "isOpen": true,
//         "aggregatedDiscountInfoV2": {
          
//         },
//         "type": "F",
//         "badgesV2": {
//           "entityBadges": {
//             "imageBased": {
              
//             },
//             "textBased": {
              
//             },
//             "textExtendedBadges": {
              
//             }
//           }
//         },
//         "differentiatedUi": {
//           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//           "differentiatedUiMediaDetails": {
//             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//             "lottie": {
              
//             },
//             "video": {
              
//             }
//           }
//         },
//         "reviewsSummary": {
          
//         },
//         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//         "restaurantOfferPresentationInfo": {
          
//         }
//       },
//       "analytics": {
        
//       },
//       "cta": {
//         "link": "https://www.swiggy.com/restaurants/lunchbox-meals-and-thalis-near-aashka-multispeciality-hospital-gandhinagar-ahmedabad-62992",
//         "type": "WEBLINK"
//       }
//     },
//     {
//       "info": {
//         "id": "45527",
//         "name": "Faasos - Wraps & Rolls",
//         "cloudinaryImageId": "af33b81798b11deba338e94b7585d348",
//         "locality": "Near Aashka Multispeciality Hospital",
//         "areaName": "Gandhinagar",
//         "costForTwo": "₹200 for two",
//         "cuisines": [
//           "Kebabs",
//           "Fast Food",
//           "Snacks",
//           "North Indian",
//           "American",
//           "Healthy Food",
//           "Desserts",
//           "Beverages"
//         ],
//         "avgRating": 4.1,
//         "feeDetails": {
//           "restaurantId": "45527",
//           "fees": [
//             {
//               "name": "BASE_DISTANCE",
//               "fee": 3900
//             },
//             {
//               "name": "BASE_TIME"
//             },
//             {
//               "name": "ANCILLARY_SURGE_FEE"
//             }
//           ],
//           "totalFee": 3900
//         },
//         "parentId": "21809",
//         "avgRatingString": "4.1",
//         "totalRatingsString": "10K+",
//         "sla": {
//           "deliveryTime": 27,
//           "lastMileTravel": 5,
//           "serviceability": "SERVICEABLE",
//           "slaString": "27 mins",
//           "lastMileTravelString": "5.0 km",
//           "iconType": "ICON_TYPE_EMPTY"
//         },
//         "availability": {
//           "nextCloseTime": "2023-09-06 01:00:00",
//           "opened": true
//         },
//         "badges": {
//           "textExtendedBadges": [
//             {
//               "iconId": "guiltfree/GF_Logo_android_3x",
//               "shortDescription": "options available",
//               "fontColor": "#7E808C"
//             }
//           ]
//         },
//         "isOpen": true,
//         "aggregatedDiscountInfoV2": {
          
//         },
//         "type": "F",
//         "badgesV2": {
//           "entityBadges": {
//             "imageBased": {
              
//             },
//             "textBased": {
              
//             },
//             "textExtendedBadges": {
//               "badgeObject": [
//                 {
//                   "attributes": {
//                     "description": "",
//                     "fontColor": "#7E808C",
//                     "iconId": "guiltfree/GF_Logo_android_3x",
//                     "shortDescription": "options available"
//                   }
//                 }
//               ]
//             }
//           }
//         },
//         "differentiatedUi": {
//           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//           "differentiatedUiMediaDetails": {
//             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//             "lottie": {
              
//             },
//             "video": {
              
//             }
//           }
//         },
//         "reviewsSummary": {
          
//         },
//         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//         "restaurantOfferPresentationInfo": {
          
//         }
//       },
//       "analytics": {
        
//       },
//       "cta": {
//         "link": "https://www.swiggy.com/restaurants/faasos-wraps-and-rolls-near-aashka-multispeciality-hospital-gandhinagar-ahmedabad-45527",
//         "type": "WEBLINK"
//       }
//     },
//     {
//       "info": {
//         "id": "44497",
//         "name": "The Belgian Waffle Co.",
//         "cloudinaryImageId": "8cb220fa3997a3b928d2ffb6c098acaf",
//         "locality": "Service Road",
//         "areaName": "Infocity",
//         "costForTwo": "₹200 for two",
//         "cuisines": [
//           "Waffle",
//           "Desserts",
//           "Ice Cream",
//           "Beverages"
//         ],
//         "avgRating": 4.3,
//         "veg": true,
//         "feeDetails": {
//           "restaurantId": "44497",
//           "fees": [
//             {
//               "name": "BASE_DISTANCE",
//               "fee": 2900
//             },
//             {
//               "name": "BASE_TIME"
//             },
//             {
//               "name": "ANCILLARY_SURGE_FEE"
//             }
//           ],
//           "totalFee": 2900
//         },
//         "parentId": "2233",
//         "avgRatingString": "4.3",
//         "totalRatingsString": "5K+",
//         "sla": {
//           "deliveryTime": 30,
//           "lastMileTravel": 3,
//           "serviceability": "SERVICEABLE",
//           "slaString": "30 mins",
//           "lastMileTravelString": "3.0 km",
//           "iconType": "ICON_TYPE_EMPTY"
//         },
//         "availability": {
//           "nextCloseTime": "2023-09-05 23:59:00",
//           "opened": true
//         },
//         "badges": {
          
//         },
//         "isOpen": true,
//         "type": "F",
//         "badgesV2": {
//           "entityBadges": {
//             "imageBased": {
              
//             },
//             "textBased": {
              
//             },
//             "textExtendedBadges": {
              
//             }
//           }
//         },
//         "aggregatedDiscountInfoV3": {
//           "header": "20% OFF",
//           "subHeader": "UPTO ₹50"
//         },
//         "differentiatedUi": {
//           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//           "differentiatedUiMediaDetails": {
//             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//             "lottie": {
              
//             },
//             "video": {
              
//             }
//           }
//         },
//         "reviewsSummary": {
          
//         },
//         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//         "restaurantOfferPresentationInfo": {
          
//         }
//       },
//       "analytics": {
        
//       },
//       "cta": {
//         "link": "https://www.swiggy.com/restaurants/the-belgian-waffle-co-service-road-infocity-ahmedabad-44497",
//         "type": "WEBLINK"
//       }
//     },
//     {
//       "info": {
//         "id": "45530",
//         "name": "Sweet Truth - Cake and Desserts",
//         "cloudinaryImageId": "4a3b48488e3aa9bda13efd8cfcd95284",
//         "locality": "Near Aashka Multispeciality Hospital",
//         "areaName": "Gandhinagar",
//         "costForTwo": "₹200 for two",
//         "cuisines": [
//           "Snacks",
//           "Bakery",
//           "Desserts",
//           "Beverages"
//         ],
//         "avgRating": 4.3,
//         "feeDetails": {
//           "restaurantId": "45530",
//           "fees": [
//             {
//               "name": "BASE_DISTANCE",
//               "fee": 3900
//             },
//             {
//               "name": "BASE_TIME"
//             },
//             {
//               "name": "ANCILLARY_SURGE_FEE"
//             }
//           ],
//           "totalFee": 3900
//         },
//         "parentId": "4444",
//         "avgRatingString": "4.3",
//         "totalRatingsString": "1K+",
//         "sla": {
//           "deliveryTime": 22,
//           "lastMileTravel": 5,
//           "serviceability": "SERVICEABLE",
//           "slaString": "22 mins",
//           "lastMileTravelString": "5.0 km",
//           "iconType": "ICON_TYPE_EMPTY"
//         },
//         "availability": {
//           "nextCloseTime": "2023-09-06 01:00:00",
//           "opened": true
//         },
//         "badges": {
          
//         },
//         "isOpen": true,
//         "type": "F",
//         "badgesV2": {
//           "entityBadges": {
//             "imageBased": {
              
//             },
//             "textBased": {
              
//             },
//             "textExtendedBadges": {
              
//             }
//           }
//         },
//         "aggregatedDiscountInfoV3": {
//           "header": "50% OFF",
//           "subHeader": "UPTO ₹100"
//         },
//         "differentiatedUi": {
//           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//           "differentiatedUiMediaDetails": {
//             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//             "lottie": {
              
//             },
//             "video": {
              
//             }
//           }
//         },
//         "reviewsSummary": {
          
//         },
//         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//         "restaurantOfferPresentationInfo": {
          
//         }
//       },
//       "analytics": {
        
//       },
//       "cta": {
//         "link": "https://www.swiggy.com/restaurants/sweet-truth-cake-and-desserts-near-aashka-multispeciality-hospital-gandhinagar-ahmedabad-45530",
//         "type": "WEBLINK"
//       }
//     },
//     {
//       "info": {
//         "id": "378603",
//         "name": "Baskin Robbins - Ice Cream Desserts",
//         "cloudinaryImageId": "85ccae4e3576f9330af102c46ca85395",
//         "locality": "Gandhinagar",
//         "areaName": "Airport Gandhinagar Highway",
//         "costForTwo": "₹250 for two",
//         "cuisines": [
//           "Desserts",
//           "Ice Cream"
//         ],
//         "avgRating": 4.1,
//         "veg": true,
//         "feeDetails": {
//           "restaurantId": "378603",
//           "fees": [
//             {
//               "name": "BASE_DISTANCE",
//               "fee": 3400
//             },
//             {
//               "name": "BASE_TIME"
//             },
//             {
//               "name": "ANCILLARY_SURGE_FEE"
//             }
//           ],
//           "totalFee": 3400
//         },
//         "parentId": "5588",
//         "avgRatingString": "4.1",
//         "totalRatingsString": "100+",
//         "sla": {
//           "deliveryTime": 25,
//           "lastMileTravel": 4.9,
//           "serviceability": "SERVICEABLE",
//           "slaString": "25 mins",
//           "lastMileTravelString": "4.9 km",
//           "iconType": "ICON_TYPE_EMPTY"
//         },
//         "availability": {
//           "nextCloseTime": "2023-09-06 03:00:00",
//           "opened": true
//         },
//         "badges": {
          
//         },
//         "isOpen": true,
//         "type": "F",
//         "badgesV2": {
//           "entityBadges": {
//             "imageBased": {
              
//             },
//             "textBased": {
              
//             },
//             "textExtendedBadges": {
              
//             }
//           }
//         },
//         "aggregatedDiscountInfoV3": {
//           "header": "10% OFF",
//           "subHeader": "ABOVE ₹1000",
//           "discountTag": "FLAT DEAL"
//         },
//         "differentiatedUi": {
//           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//           "differentiatedUiMediaDetails": {
//             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//             "lottie": {
              
//             },
//             "video": {
              
//             }
//           }
//         },
//         "reviewsSummary": {
          
//         },
//         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//         "restaurantOfferPresentationInfo": {
          
//         }
//       },
//       "analytics": {
        
//       },
//       "cta": {
//         "link": "https://www.swiggy.com/restaurants/baskin-robbins-ice-cream-desserts-gandhinagar-airport-gandhinagar-highway-ahmedabad-378603",
//         "type": "WEBLINK"
//       }
//     },
//     {
//       "info": {
//         "id": "156086",
//         "name": "The Good Bowl",
//         "cloudinaryImageId": "0b3356a88b6fc5966c452c4c9b1b5e4a",
//         "locality": "Near Aashka Multispeciality Hospital",
//         "areaName": "Gandhinagar",
//         "costForTwo": "₹200 for two",
//         "cuisines": [
//           "Biryani",
//           "North Indian",
//           "Pastas",
//           "Punjabi",
//           "Desserts",
//           "Beverages"
//         ],
//         "avgRating": 4.1,
//         "feeDetails": {
//           "restaurantId": "156086",
//           "fees": [
//             {
//               "name": "BASE_DISTANCE",
//               "fee": 3900
//             },
//             {
//               "name": "BASE_TIME"
//             },
//             {
//               "name": "ANCILLARY_SURGE_FEE"
//             }
//           ],
//           "totalFee": 3900
//         },
//         "parentId": "7918",
//         "avgRatingString": "4.1",
//         "totalRatingsString": "1K+",
//         "sla": {
//           "deliveryTime": 27,
//           "lastMileTravel": 5,
//           "serviceability": "SERVICEABLE",
//           "slaString": "27 mins",
//           "lastMileTravelString": "5.0 km",
//           "iconType": "ICON_TYPE_EMPTY"
//         },
//         "availability": {
//           "nextCloseTime": "2023-09-06 01:00:00",
//           "opened": true
//         },
//         "badges": {
          
//         },
//         "isOpen": true,
//         "type": "F",
//         "badgesV2": {
//           "entityBadges": {
//             "imageBased": {
              
//             },
//             "textBased": {
              
//             },
//             "textExtendedBadges": {
              
//             }
//           }
//         },
//         "aggregatedDiscountInfoV3": {
//           "header": "40% OFF",
//           "subHeader": "UPTO ₹80"
//         },
//         "differentiatedUi": {
//           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//           "differentiatedUiMediaDetails": {
//             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//             "lottie": {
              
//             },
//             "video": {
              
//             }
//           }
//         },
//         "reviewsSummary": {
          
//         },
//         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//         "restaurantOfferPresentationInfo": {
          
//         }
//       },
//       "analytics": {
        
//       },
//       "cta": {
//         "link": "https://www.swiggy.com/restaurants/the-good-bowl-near-aashka-multispeciality-hospital-gandhinagar-ahmedabad-156086",
//         "type": "WEBLINK"
//       }
//     },
//     {
//       "info": {
//         "id": "45528",
//         "name": "Behrouz Biryani",
//         "cloudinaryImageId": "49c27c020e946f8f4fc13fdc9038525c",
//         "locality": "Near Aashka Multispeciality Hospital",
//         "areaName": "Gandhinagar",
//         "costForTwo": "₹200 for two",
//         "cuisines": [
//           "Biryani",
//           "Mughlai",
//           "Lucknowi",
//           "Hyderabadi",
//           "Kebabs",
//           "North Indian",
//           "Desserts",
//           "Beverages"
//         ],
//         "avgRating": 4.3,
//         "feeDetails": {
//           "restaurantId": "45528",
//           "fees": [
//             {
//               "name": "BASE_DISTANCE",
//               "fee": 5900
//             },
//             {
//               "name": "BASE_TIME"
//             },
//             {
//               "name": "ANCILLARY_SURGE_FEE"
//             }
//           ],
//           "totalFee": 5900
//         },
//         "parentId": "1803",
//         "avgRatingString": "4.3",
//         "totalRatingsString": "5K+",
//         "sla": {
//           "deliveryTime": 28,
//           "lastMileTravel": 5,
//           "serviceability": "SERVICEABLE",
//           "slaString": "28 mins",
//           "lastMileTravelString": "5.0 km",
//           "iconType": "ICON_TYPE_EMPTY"
//         },
//         "availability": {
//           "nextCloseTime": "2023-09-06 03:00:00",
//           "opened": true
//         },
//         "badges": {
          
//         },
//         "isOpen": true,
//         "aggregatedDiscountInfoV2": {
          
//         },
//         "type": "F",
//         "badgesV2": {
//           "entityBadges": {
//             "imageBased": {
              
//             },
//             "textBased": {
              
//             },
//             "textExtendedBadges": {
              
//             }
//           }
//         },
//         "differentiatedUi": {
//           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//           "differentiatedUiMediaDetails": {
//             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//             "lottie": {
              
//             },
//             "video": {
              
//             }
//           }
//         },
//         "reviewsSummary": {
          
//         },
//         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//         "restaurantOfferPresentationInfo": {
          
//         }
//       },
//       "analytics": {
        
//       },
//       "cta": {
//         "link": "https://www.swiggy.com/restaurants/behrouz-biryani-near-aashka-multispeciality-hospital-gandhinagar-ahmedabad-45528",
//         "type": "WEBLINK"
//       }
//     }
//   ]