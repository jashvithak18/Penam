import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      nav: {
        home: "Home",
        story: "Story",
        menu: "Menu",
        gallery: "Gallery",
        reservations: "Reservations",
        contact: "Contact",
        reserve_btn: "Reserve Table"
      },
      hero: {
        title: "PENAM",
        subtitle: "Where Tradition Meets Taste",
        description: "From village kitchens to your plate — experience authentic South Indian flavors crafted with warmth, culture, and heritage.",
        swiggy: "Order on Swiggy",
        reserve: "Reserve a Table"
      },
      story: {
        roots_title: "Our Roots",
        roots_subtitle: "The Hearth of Heritage",
        roots_text1: "PENAM was born from a deep love for the culinary heritage of South India's pristine villages. In our kitchen, we celebrate time-honored cooking methods passed down through generations. From grinding spices by hand on stone mortars to simmering sambar in heavy brass pots, every dish is an homage to our ancestors.",
        roots_text2: "We source our ingredients directly from local farms—handpicked red chillies from Guntur, organic turmeric, and fresh curry leaves. This ensures that every bite is an authentic expression of village life, bursting with pure, unadulterated flavors.",
        
        crafted_title: "Crafted with Tradition",
        crafted_subtitle: "Rituals of Taste",
        
        card_banana_title: "Banana Leaf Serving",
        card_banana_desc: "The sacred art of dining. Eating on fresh banana leaves enhances food aroma and offers health benefits.",
        card_dosa_title: "Fresh Dosa Crafting",
        card_dosa_desc: "Crispy, golden crepes swirled perfectly on cast-iron griddles (Penam), drizzled with organic ghee.",
        card_coffee_title: "Filter Coffee Ritual",
        card_coffee_desc: "Traditional chicory-blended decoction frothed dynamically from brass tumblers.",
        card_spices_title: "Heritage Spices",
        card_spices_desc: "Whole spices hand-pounded to release intense oils and authentic village flavors.",
        card_meals_title: "Temple-Style Meals",
        card_meals_desc: "A wholesome spread of curries, rasam, and sweets curated with divine purity.",
        
        exp_title: "Experience PENAM",
        exp_subtitle: "More Than Dining, A Homecoming",
        exp_warmth: "Warmth",
        exp_warmth_desc: "From our welcoming smiles to the brass lamps lighting your way, feel absolute hospitality.",
        exp_family: "Family Dining",
        exp_family_desc: "Sharing meals from large platters, laughing, and making memories like village feasts.",
        exp_ambiance: "Village Ambiance",
        exp_ambiance_desc: "Traditional wooden pillars, soft clay terracotta, and subtle aromas of roasting spices.",
        exp_handcrafted: "Handcrafted Food",
        exp_handcrafted_desc: "No preservatives, no shortcuts. Every single recipe is prepared fresh from scratch.",
        exp_cultural: "Cultural Journey",
        exp_cultural_desc: "Immerse yourself in traditional music, Kolam art, and rich South Indian heritage."
      },
      menu: {
        title: "Our Culinary Canvas",
        subtitle: "A curated assembly of heirloom recipes",
        breakfast: "Breakfast",
        lunch: "Lunch",
        dinner: "Dinner",
        beverages: "Beverages",
        currency: "₹",
        order_swiggy: "Order via Swiggy",
        items: {
          idli: { name: "Classic Idli", desc: "Soft, pillowy steamed rice-lentil cakes served with sambar and traditional chutneys." },
          ghee_idli: { name: "Ghee Podi Idli", desc: "Steamed idlis tossed in pure clarified butter and home-made aromatic spice powder." },
          mini_idli: { name: "Mini Sambar Idli", desc: "Button-sized idlis submerged in a bowl of hot, piping aromatic lentil soup." },
          plain_dosa: { name: "Gold Paper Dosa", desc: "Wafer-thin, extra crispy golden crepe made from fermented stone-ground batter." },
          masala_dosa: { name: "Mysore Masala Dosa", desc: "Crispy dosa lined with spicy garlic chutney, stuffed with tempered potato mash." },
          pesarattu: { name: "Andhra Pesarattu", desc: "Nutritious green gram crepe infused with ginger and green chillies, served with ginger chutney." },
          onion_dosa: { name: "Onion Rava Dosa", desc: "Lacy semolina crepe studded with finely chopped onions, black pepper, and cumin." },
          vada: { name: "Medu Vada", desc: "Crispy, golden-fried savory lentil doughnuts infused with peppercorns and curry leaves." },
          puri: { name: "Puri Chana", desc: "Puffed, golden whole-wheat breads served with flavorful potato curry and spicy chickpea masala." },
          pongal: { name: "Ven Pongal", desc: "Cozy rice and yellow lentil mash tempered with black pepper, cumin, ginger, and cashew nuts in ghee." },
          roti: { name: "Malabar Parotta", desc: "Flaky, layered soft flatbread served with aromatic vegetable kurma." },
          upma: { name: "Rava Upma", desc: "Savory roasted semolina porridge cooked with fresh garden vegetables and roasted cashews." },
          
          sambar_rice: { name: "Sambar Sadam", desc: "Comforting rice cooked with assorted vegetables, tamarind, and custom roasted spices." },
          curd_rice: { name: "Daddojanam", desc: "Cooling tempered yogurt rice garnishing with mustard seeds, pomegranate, and fresh coriander." },
          lemon_rice: { name: "Nimmakaya Pulihora", desc: "Tangy rice flavored with fresh lemon juice, roasted peanuts, turmeric, and curry leaves." },
          veg_meals: { name: "Village Veg Meals", desc: "A classic platter with steamed rice, sambar, rasam, dry vegetable fry, dal, and fresh curd." },
          andhra_meals: { name: "Andhra Bhojanam", desc: "Fiery traditional meal with hot rice, spicy powders (podi), ghee, gongura pickle, and curries." },
          thali: { name: "Grand South Thali", desc: "The ultimate luxury thali featuring 12 traditional delicacies, payasam, appalam, and buttermilk." },
          pulihora: { name: "Chintapandu Pulihora", desc: "Authentic festival tamarind rice tempered with mustard, red chillies, and crunchy peanuts." },
          coconut_rice: { name: "Kobbari Annam", desc: "Rich and mild rice cooked in fresh coconut milk, seasoned with light spices and cashew nuts." },
          
          biryani: { name: "Nizam Veg Biryani", desc: "Fragrant basmati rice layered with garden fresh vegetables and royal spices, slow-cooked in dum style." },
          paneer_biryani: { name: "Paneer Tikka Biryani", desc: "Spiced basmati rice layered with succulent cubes of grilled paneer and fresh mint leaves." },
          curry_combos: { name: "Chapati Kurma Combo", desc: "Three handmade soft whole wheat chapatis served with rich, creamy mixed vegetable kurma." },
          dosa_specials: { name: "Chef's Special Spring Dosa", desc: "Roll-stuffed dosa with crunchy vegetables, grated paneer, and rich cheese blend." },
          
          coffee: { name: "Traditional Filter Coffee", desc: "A rich, authentic, strong chicory blend brewed in brass filters, frothed with hot milk." },
          buttermilk: { name: "Masala Majjiga", desc: "Cooling churned yogurt drink spiced with ginger, green chillies, coriander, and curry leaves." },
          panakam: { name: "Divine Panakam", desc: "Traditional sweet jaggery nectar infused with dry ginger, black pepper, and cardamom." },
          lime_soda: { name: "Spiced Lemon Soda", desc: "Fizzy fresh lime juice with a local twist of chat masala, black salt, and ginger." }
        }
      },
      reservation: {
        title: "Reserve a Table",
        subtitle: "Partake in our traditional feasts",
        name_label: "Full Name",
        name_placeholder: "Enter your name",
        phone_label: "Phone Number",
        phone_placeholder: "Enter your contact number",
        guests_label: "Number of Guests",
        guests_placeholder: "Select guests",
        date_label: "Preferred Date",
        time_label: "Preferred Time",
        requests_label: "Special Requests",
        requests_placeholder: "Let us know about birthdays, food allergies, or high chairs...",
        submit_btn: "Confirm Reservation",
        booking_loading: "Reserving your table...",
        success_title: "Reservation Successful!",
        success_desc: "A table has been lovingly reserved for you. A simulated confirmation SMS has been sent to your device.",
        err_fields: "Please fill in all required fields.",
        err_generic: "Something went wrong. Please try again."
      },
      footer: {
        tagline: "Experience the pure heritage of South Indian village cooking. Crafted with devotion, served with love.",
        hours_title: "Opening Hours",
        hours_weekdays: "Mon - Fri: 7:00 AM - 10:30 PM",
        hours_weekends: "Sat - Sun: 6:30 AM - 11:00 PM",
        contact_title: "Locate Us",
        contact_addr: "108 Temple Road, Cultural District, Penam",
        contact_phone: "+91 98765 43210",
        contact_email: "welcome@penamrestaurant.com",
        links_title: "Quick Links",
        copyright: "© 2026 PENAM Restaurant. All rights reserved. Made with love in India."
      }
    }
  },
  te: {
    translation: {
      nav: {
        home: "ప్రారంభం",
        story: "కథ",
        menu: "మెనూ",
        gallery: "చిత్రాలు",
        reservations: "రిజర్వేషన్లు",
        contact: "సంప్రదించండి",
        reserve_btn: "టేబుల్ బుక్ చేయండి"
      },
      hero: {
        title: "పెనం",
        subtitle: "సాంప్రదాయం రుచితో కలిసే చోటు",
        description: "పల్లెటూరి వంటశాలల నుండి మీ ప్లేట్ వరకు — అనురాగం, సంస్కృతి మరియు వారసత్వంతో చేసిన ప్రామాణికమైన దక్షిణ భారతీయ రుచులను ఆస్వాదించండి.",
        swiggy: "స్విగ్గీలో ఆర్డర్ చేయండి",
        reserve: "టేబుల్ బుక్ చేసుకోండి"
      },
      story: {
        roots_title: "మన మూలాలు",
        roots_subtitle: "వారసత్వ వంటశాల",
        roots_text1: "దక్షిణ భారతదేశంలోని అందమైన గ్రామాలలో లభించే సాంప్రదాయ వంటకాలపై ఉన్న ప్రేమతో 'పెనం' జన్మించింది. మా వంటగదిలో, మేము తరతరాలుగా వస్తున్న సాంప్రదాయ పద్ధతులను గౌరవిస్తాము. రోటి పచ్చళ్ళు, తిరగలిపై నూరిన మసాలాలు, మరియు ఇత్తడి పాత్రలలో ఉడికించిన సాంబార్ — ప్రతి వంటకం మన పూర్వీకుల రుచులకు నివాళి.",
        roots_text2: "మేము వంట కోసం వాడే దినుసులను నేరుగా స్థానిక రైతుల నుండి సేకరిస్తాము — గుంటూరు మిరపకాయలు, సేంద్రీయ పసుపు, మరియు తాజా కరివేపాకు. ఇది మా ప్రతి వంటకానికి పల్లెటూరి స్వచ్ఛతను మరియు సహజమైన రుచులను అందిస్తుంది.",
        
        crafted_title: "సాంప్రదాయ సృష్టి",
        crafted_subtitle: "రుచి యొక్క ఆచారాలు",
        
        card_banana_title: "అరటి ఆకు భోజనం",
        card_banana_desc: "అరటి ఆకులో భోజనం చేయడం ఒక పవిత్రమైన అనుభవం. ఇది ఆహారానికి అద్భుతమైన సువాసనను, మరియు ఆరోగ్య ప్రయోజనాలను ఇస్తుంది.",
        card_dosa_title: "తాజా దోసెల తయారీ",
        card_dosa_desc: "ఇనుప పెనం మీద తాజా నెయ్యితో కరకరలాడేలా కాల్చిన అద్భుతమైన దోసెలు.",
        card_coffee_title: "ఫిల్టర్ కాఫీ ఆచారం",
        card_coffee_desc: "ఇత్తడి లోటాలలో నురుగుతో కూడిన సాంప్రదాయ డికాషన్ కాఫీ.",
        card_spices_title: "వారసత్వ సుగంధ ద్రవ్యాలు",
        card_spices_desc: "పల్లెటూరి రుచుల కోసం రోటిలో దంచిన తాజా మసాలా పొడులు.",
        card_meals_title: "గుడి శైలి భోజనాలు",
        card_meals_desc: "పరమ పవిత్రతతో కూడిన తాజా కూరలు, రసం, మరియు తీపి వంటకాల సమాహారం.",
        
        exp_title: "పెనం అనుభూతి",
        exp_subtitle: "కేవలం భోజనం కాదు, మన ఇంటి అనుభూతి",
        exp_warmth: "ఆదరణ",
        exp_warmth_desc: "మా చిరునవ్వుల నుండి వెలిగే సమయ దీపాల వరకు, అచ్చమైన భారతీయ ఆతిథ్యాన్ని అనుభవించండి.",
        exp_family: "కుటుంబ భోజనం",
        exp_family_desc: "పెద్ద పళ్ళాలలో వడ్డించిన వంటకాలను పంచుకుంటూ, పల్లెటూరి పండుగలా కలిసి భుజించండి.",
        exp_ambiance: "పల్లెటూరి వాతావరణం",
        exp_ambiance_desc: "సాంప్రదాయ చెక్క స్తంభాలు, మట్టి గోడల అనుభూతి మరియు కమ్మని తిరగమోత సువాసనలు.",
        exp_handcrafted: "చేతివంటల రుచులు",
        exp_handcrafted_desc: "ఎటువంటి నిల్వ కారకాలు లేకుండా, ప్రతి వంటకాన్ని పూర్తిగా సహజంగా తయారు చేస్తాము.",
        exp_cultural: "సాంస్కృతిక ప్రయాణం",
        exp_cultural_desc: "సాంప్రదాయ సంగీతం, ముగ్గుల కళ, మరియు దక్షిణ భారత వారసత్వంలో మునిగిపోండి."
      },
      menu: {
        title: "రుచుల ప్రపంచం",
        subtitle: "వారసత్వ వంటల ప్రత్యేక సమాహారం",
        breakfast: "టిఫిన్స్ (అల్పాహారం)",
        lunch: "మధ్యాహ్న భోజనం",
        dinner: "రాత్రి భోజనం",
        beverages: "పానీయాలు",
        currency: "₹",
        order_swiggy: "స్విగ్గీ ద్వారా ఆర్డర్ చేయండి",
        items: {
          idli: { name: "మల్లెపూవు ఇడ్లీ", desc: "సాంబార్ మరియు చట్నీలతో వడ్డించే మెత్తటి ఆవిరి ఇడ్లీలు." },
          ghee_idli: { name: "నెయ్యి పొడి ఇడ్లీ", desc: "తాజా నెయ్యి, కమ్మని కారప్పొడితో కలిపిన వేడివేడి ఇడ్లీలు." },
          mini_idli: { name: "మినీ సాంబార్ ఇడ్లీ", desc: "వేడి సాంబార్ లో మునిగిన చిన్న ఇడ్లీలు." },
          plain_dosa: { name: "కరుడు దోసె (ప్లెయిన్)", desc: "పెనం మీద సన్నగా కరకరలాడేలా కాల్చిన బంగారు రంగు దోసె." },
          masala_dosa: { name: "మైసూర్ మసాలా దోసె", desc: "కారం చట్నీ రాసి, ఆలుగడ్డ మిశ్రమంతో చేసిన ప్రత్యేక దోసె." },
          pesarattu: { name: "ఆంధ్రా పెసరట్టు", desc: "అల్లం, పచ్చిమిర్చి జోడించిన తాజా పెసర పిండి దోసె." },
          onion_dosa: { name: "ఉల్లి రవ్వ దోసె", desc: "రవ్వ, ఉల్లిపాయ ముక్కలు, మిరియాలు మరియు జీలకర్రతో చేసిన దోసె." },
          vada: { name: "గారె (మెదు వడ)", desc: "మిరియాలు, కరివేపాకు వేసి కరకరలాడేలా వేయించిన మినప గారె." },
          puri: { name: "పూరి కూర", desc: "వేడి పూరీలు మరియు ఆలూ మసాలా కూర." },
          pongal: { name: "నెయ్యి పొంగలి", desc: "బియ్యం, పెసరపప్పుతో చేసి, మిరియాలు, జీలకర్ర మరియు జీడిపప్పు తిరగమోత వేసిన పొంగలి." },
          roti: { name: "మలబార్ పరోటా", desc: "పొరలు పొరలుగా ఉండే మెత్తటి పరోటా మరియు కూరగాయల కుర్మా." },
          upma: { name: "రవ్వ ఉప్మా", desc: "తాజా కూరగాయలు మరియు వేయించిన జీడిపప్పుతో చేసిన రుచికరమైన ఉప్మా." },
          
          sambar_rice: { name: "సాంబార్ అన్నం", desc: "కూరగాయలు, చింతపండు మరియు ప్రత్యేక మసాలాలతో వండిన కమ్మని అన్నం." },
          curd_rice: { name: "దద్దోజనం", desc: "ఆవాలు, జీలకర్ర, దానిమ్మ గింజలతో తిరగమోత వేసిన కమ్మని పెరుగు అన్నం." },
          lemon_rice: { name: "నిమ్మకాయ పులిహోర", desc: "నిమ్మరసం, పసుపు, కరివేపాకు, మరియు పల్లీల పోపుతో చేసిన పులిహోర." },
          veg_meals: { name: "పల్లెటూరి శాకాహార భోజనం", desc: "అన్నం, సాంబార్, రసం, కూర, పప్పు మరియు తాజా పెరుగుతో కూడిన సాంప్రదాయ భోజనం." },
          andhra_meals: { name: "ఆంధ్రా భోజనం", desc: "వేడి అన్నం, పప్పు, నెయ్యి, గోంగూర పచ్చడి మరియు వేపుళ్లతో కూడిన ఘాటైన భోజనం." },
          thali: { name: "రాజ నివాస థాలి", desc: "పన్నెండు రకాల ప్రత్యేక సాంప్రదాయ వంటకాలు, పాయసం మరియు మజ్జిగలతో కూడిన విందు భోజనం." },
          pulihora: { name: "చింతపండు పులిహోర", desc: "చింతపండు గుజ్జు, పోపు దినుసులు, వేరుశనగ పల్లీలతో చేసిన సాంప్రదాయ పులిహోర." },
          coconut_rice: { name: "కొబ్బరి అన్నం", desc: "తాజా కొబ్బరి పాలు మరియు జీడిపప్పులతో వండిన రుచికరమైన అన్నం." },
          
          biryani: { name: "నిజాం వెజ్ బిర్యానీ", desc: "బాస్మతి బియ్యం, తాజా కూరగాయలు మరియు సుగంధ ద్రవ్యాలతో దమ్ చేసిన బిర్యానీ." },
          paneer_biryani: { name: "పన్నీర్ టిక్కా బిర్యానీ", desc: "మసాలా బాస్మతి అన్నం మరియు కాల్చిన పన్నీర్ ముక్కల ప్రత్యేక దమ్ బిర్యానీ." },
          curry_combos: { name: "చపాతీ కుర్మా కాంబో", desc: "చేత్తో చేసిన మెత్తటి చపాతీలు మరియు క్రీమీ వెజిటబుల్ కుర్మా." },
          dosa_specials: { name: "చీఫ్స్ స్పెషల్ స్ప్రింగ్ దోసె", desc: "కూరగాయలు, తురిమిన పన్నీర్ మరియు చీజ్ తో నిండిన దోసె." },
          
          coffee: { name: "సాంప్రదాయ ఫిల్టర్ కాఫీ", desc: "ఇత్తడి ఫిల్టర్లలో మరిగించిన డికాషన్, తాజా పాలు మరియు నురుగుతో కూడిన కాఫీ." },
          buttermilk: { name: "మసాలా మజ్జిగ", desc: "అల్లం, పచ్చిమిర్చి, కరివేపాకు జోడించిన చల్లటి పలచని మజ్జిగ." },
          panakam: { name: "తీపి పానకం", desc: "బెల్లం, మిరియాలు, యాలకులు మరియు శొంఠితో చేసిన దైవిక పానీయం." },
          lime_soda: { name: "మసాలా నిమ్మకాయ సోడా", desc: "తాజా నిమ్మరసం, సోడా మరియు అల్లం కలిపిన చల్లని పానీయం." }
        }
      },
      reservation: {
        title: "టేబుల్ బుక్ చేసుకోండి",
        subtitle: "మన సాంప్రదాయ విందులో భాగస్వాములు అవ్వండి",
        name_label: "పూర్తి పేరు",
        name_placeholder: "మీ పేరు రాయండి",
        phone_label: "ఫోన్ నంబర్",
        phone_placeholder: "మీ మొబైల్ నంబర్ రాయండి",
        guests_label: "అతిథుల సంఖ్య",
        guests_placeholder: "సభ్యులను ఎంచుకోండి",
        date_label: "తేదీ",
        time_label: "సమయం",
        requests_label: "ప్రత్యేక అభ్యర్థనలు (ఐచ్ఛికం)",
        requests_placeholder: "పుట్టినరోజులు, అలర్జీలు లేదా ఇతర అభ్యర్థనలు ఉంటే ఇక్కడ రాయండి...",
        submit_btn: "రిజర్వేషన్ ఖరారు చేయండి",
        booking_loading: "మీ రిజర్వేషన్ జరుగుతోంది...",
        success_title: "రిజర్వేషన్ విజయవంతమైంది!",
        success_desc: "మీ కోసం టేబుల్ సిద్ధంగా ఉంచబడింది. మీ మొబైల్ నంబర్ కు నిర్ధారణ సందేశం పంపబడింది (సిమ్యులేటెడ్).",
        err_fields: "దయచేసి అన్ని వివరాలను పూరించండి.",
        err_generic: "ఏదో పొరపాటు జరిగింది. దయచేసి మళ్ళీ ప్రయత్నించండి."
      },
      footer: {
        tagline: "దక్షిణ భారతీయ పల్లెటూరి వంటల స్వచ్ఛమైన అనుభూతిని పొందండి. భక్తితో వండి, అనురాగంతో వడ్డిస్తాము.",
        hours_title: "సమయాలు",
        hours_weekdays: "సోమ - శుక్ర: ఉదయం 7:00 - రాత్రి 10:30",
        hours_weekends: "శని - ఆది: ఉదయం 6:30 - రాత్రి 11:00",
        contact_title: "మా చిరునామా",
        contact_addr: "108 ఆలయ మార్గం, సాంస్కృతిక విభాగం, పెనం",
        contact_phone: "+91 98765 43210",
        contact_email: "welcome@penamrestaurant.com",
        links_title: "త్వరిత లింకులు",
        copyright: "© 2026 పెనం రెస్టారెంట్. సర్వ హక్కులూ ప్రత్యేకించబడినవి. ప్రేమతో భారతదేశంలో తయారుచేయబడింది."
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: false,
    interpolation: {
      escapeValue: false // not needed for react as it escapes by default
    }
  });

export default i18n;
