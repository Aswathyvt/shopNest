const express=require("express");

const router=express.Router();
const {upload}=require('../multer/multer');
//const config=require("../config/config");
const auth = require('../middleware/userAuth');


const {aProductPage,shopProduct}=require('../controllers/productCtrl');
const{getCart,addToCart,deleteCartItem,deleteCart,modifyCartQuantity}=require("../controllers/cartCtrl");
const {
    loginUser,
    verifyUser,
    registerUser,
    createUser,
    resendOtp, 
    loadIndex,
    emailVerified,
    forgotPsdPage,
    forgotEmailValid, 
    forgotPsdOTP,
    updatePassword,
    emailForgot,
    logout,
    userProfile,
    addProfilePic,
    editProfile,
    updateProfile,
    addUserAddress,
    editAddress,
    updateAddress,
    deleteAddress} = require("../controllers/userctrl");

const {checkOut,orderPlaced,orderDetails,orderPage,allOrderDetails,cancelOrder,returnOrder,verifyPayment,useWallet,buyNOw,buynowPlaceOrder}=require('../controllers/orderCtrl');

const {productSearch,CategoryFilter,filterSearch,colorFilter,priceFilter,brandFilter,clearFilter,sortByPrice,sizeFilter}=require('../controllers/filterCtrl');
const {addToList,Wishlist,deleteWishlistItem}=require('../controllers/wishlistCtrl');
const {addMoneyWallet,updateMongoWallet,sumWallet,sumWalletBuynow,walletPayment}=require('../controllers/walletCtrl')
const {validateCoupon}=require('../controllers/couponCtrl');
const {invoice,invoices}=require('../controllers/invoiceCtrl');
const {aboutpage}=require('../controllers/aboutCtrl');
const { isLogged} = require('../middleware/userAuth')








// user---------------------------------------------------------------------------
router.get('/',loadIndex);
router.get('/register',registerUser);
router.post('/register',createUser);
router.post('/emailVerified',emailVerified)
router.get('/forgotPassword',forgotPsdPage);
router.post('/forgotEmailValid',forgotEmailValid);
router.post('/forgotPsdOTP', forgotPsdOTP);
router.post('/updatePassword', updatePassword);
router.get('/login',loginUser);
router.post('/login',verifyUser);
router.get('/emailForgot',emailForgot)
router.get('/logout',logout);
router.post('/resendOTP',resendOtp);


//about--------------------------------------------------------------------------------

router.get('/about',aboutpage)



//user profile----------------------------------------------------------------------
router.get('/profile',isLogged,userProfile);
router.post('/addProfilePic',isLogged,upload.single('image'), addProfilePic);
router.get('/editProfile',isLogged,editProfile);
router.post('/updateProfile',isLogged,updateProfile);


//user address----------------------------------------------------------------------
router.post('/addUserAddress',isLogged,addUserAddress);
router.get('/editAddress',isLogged,editAddress);
router.post('/updateAddress',isLogged,updateAddress);
router.get('/deleteAddress',isLogged,deleteAddress);




//products--------------------------------------------------------------------------
router.get('/aProduct',isLogged,upload.single('images'),aProductPage)
router.get('/shop', shopProduct)



//cart-------------------------------------------------------------------------------
router.get('/cart',isLogged,getCart);
router.get('/addToCart',isLogged,addToCart);
router.get('/deleteCartItem',isLogged,deleteCartItem);
router.post('/modifyCartQuantity',isLogged,modifyCartQuantity);
router.get('/deleteCart',isLogged,deleteCart);


//order--------------------------------------------------------------------------------
router.get('/checkout',isLogged,checkOut);
router.post('/orderPlaced',isLogged,orderPlaced);
router.get('/orderDetails',isLogged,orderDetails);
router.get('/orderPage',isLogged,orderPage);
router.get('/allOrderDetails',isLogged,allOrderDetails);
router.get('/cancelOrder',isLogged,cancelOrder);
router.get('/return',isLogged,returnOrder);
router.post('/verifyPayment',isLogged,verifyPayment)
router.get('/buyNOw',isLogged,buyNOw);
router.post('/buynowPlaceOrder',isLogged,buynowPlaceOrder);



//filter---------------------------------------------------------------------------------

router.post('/productSearch',productSearch);
router.get('/CategoryFilter',CategoryFilter);
router.post('/filterSearch',filterSearch);
router.get('/priceFilter',priceFilter);
router.get('/brandFilter',brandFilter);
router.get('/sizeFilter',sizeFilter);
router.get('/clearFilter',clearFilter);//clear all the filter 
router.get('/sortByPrice',sortByPrice);
router.get('/colorFilter',colorFilter);









//wallet-------------------------------------------------------------------------------------

router.post('/addMoneyWallet',isLogged,addMoneyWallet)
router.post('/updateMongoWallet',isLogged,updateMongoWallet)
router.post('/useWallet',isLogged,useWallet)
router.get('/sumWalletBuynow',isLogged,sumWalletBuynow)
router.post('/walletPayment',isLogged,walletPayment)
router.post('/sumWallet',sumWallet);

//coupon----------------------------------------------------------------------------------

router.post('/validateCoupon',validateCoupon);



//wishlist-----------------------------------------------------------------------------------


router.get('/Wishlist',isLogged,Wishlist)//rendering the wishlist
router.get('/addToList',isLogged,addToList)// add apriduct to the wish list
router.get('/deleteWishlistItem',isLogged,deleteWishlistItem)
        
//invoice--------------------------------------------------------------------------------------

router.get('/invoice',isLogged,invoice);
router.get('/invoices',isLogged,invoices);




module.exports=router;   