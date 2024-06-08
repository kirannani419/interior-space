<!-- Topbar Start -->
<?php include('header.php'); ?>
<!-- Topbar End -->

<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    .header-12{
        background-color: radial-gradient(100% 100% at 50% 50%, #fbba00 0, #ef7d00 100%);
    }
    html,
    body {
        padding: 0;
        margin: 0;
        overflow-x: hidden;
    }
    .header_transparent {
        background: black !important;
    }

    .thankyou img {
        width: 85%;
        object-fit: contain;
    }

    .thankyou {
    padding: 120px 0 0px;
    border-top: 1.5px solid #808080;
    border-bottom: 3.5px solid #808080;
    }

    .thankyou .row {
        display: flex;
        align-items: center;
        justify-content: center;

    }

    .thankyou .box p {
        font-weight: bold;
    }

    .thankyou .box {
        max-width: 300px !important;
        margin: 0 auto;
        animation: zoom 2s linear infinite alternate;
        text-align: center;
    }


    @keyframes zoom {
        from {
            transform: scale(1)
        }

        to {
            transform: scale(1.1, 1.1)
        }
    }

    .thankyou .box h1 {
        font-weight: bold;
        font-size: 55px !important;
        color: #020202;
        padding: 15px 0px;
        border-top: 5px solid #020202;
        border-bottom: 5px solid #020202;
        text-align: center;
    }

    .thankyou .box a{
        color: #ffffff;
        background: #020202;
        padding: 8px 10px;
        border-radius: 20px;
    }
    .thankyou .box a:hover{
            color: #222;
            background: #ffff;
            border:1px solid #020202;
            text-decoration:none;
            padding: 8px 10px;
            border-radius: 20px;
    }
    @media(max-width: 767px) {
        .thankyou .row {
            display: block;
        }

        .thankyou img {
            height: 200px !important;
        }

        .thankyou .box h1 {
            font-size: 30px !important;
        }
    }
</style>



    <!-- thankyou  section Start-->
    <div class="thankyou">
        <div class="container">
            <div class="row text-center">
                <div class="col-md-5 col-sm-6">
                    <img src="./assets/images/thankyou.gif">
                </div>
                <div class="col-md-7 col-sm-6">
                    <div class="box">
                        <h1>Thank You!</h1>
                        <p>We'll Get Back To You </p>
                        <a href="/">Go to Home</a>
                    </div>

                </div>
            </div>
        </div>
    </div>
    
    <!-- thankyou  section End-->








<!-- Footer Start -->
<?php include('footer.php'); ?>
<!-- Footerr End -->