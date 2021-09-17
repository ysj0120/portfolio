<template>
    <div id="footer">
        <!-- 하단 영역 03 : INFO & COPY -->
        <div class="footer_section2 cboth">
            <div class="inner cboth">
                <ul class="bt_menu">
                    <li><a href="#">회사 소개</a></li>
                    <li><a href="#">광고/제휴안내</a></li>
                    <li><a href="#">이용안내</a></li>
                    <li><a href="#">이용약관</a></li>
                    <li><a href="#" class="private">개인정보처리방침</a></li>
                    <li><a href="#">고객센터</a></li>
                    <li><a href="#">지식재산센터</a></li>
                    <li><a href="#">소비자권리장전</a></li>
                </ul><!-- //bt_menu -->
            </div><!-- //inner -->
        </div><!-- //footer_section2 -->
        <div class="footer_section3">
            <div class="inner2 cboth">
                <div class="bt_cscenter">
                    <div class="title01">CUSTOMER</div>
                    <div class="title02">CENTER</div>
                    <div class="title03">고객만족센터</div>
                    <div class="phone">
                        <p class="phone01">02.6949.3397</p>
                    </div>
                    <div class="email">
                        <p class="email01">이메일</p>
                        <p class="email02"><a href="$" class="btn_email"><span style="color:#396ef3;"></span></a></p>
                    </div>
                    <span>대표자</span> :
                    <p>
                        <span>상담시간</span> : 평일 오전 10시 - 오후 6시 30분<br>
                        <span>점심시간</span> : 오후 12시 - 오후 1시<br>
                        토, 일, 공휴일은 휴무입니다.
                    </p>
                </div><!-- //bt_cscenter -->

                <div class="copy">
                    <span>상호</span> : <span> <span style="color:#396ef3;">올디프 사업부</span></span><br>
                    <span>주소</span> : <span><br>대표자</span> :<br>
                    <span>대표전화번호</span> : <br> <span>FAX</span> : <br>
                    <span>사업자등록번호</span> : <br> <span>통신판매업 신고번호</span> :
                    <br> <span>소프트웨어 개발 및 유지보수</span> : 올디프소프트웨어서비스 유한회사<br>
                    <span>개인정보관리 책임자</span> : <a href="http://ftc.go.kr/info/bizinfo/communicationList.jsp"
                        target="_blank" class="btn_licensee">사업자정보확인</a>
                    <p class="mtag">COPYRIGHT &copy;. All RIGHTS RESERVED.</p>
                </div><!-- //copy -->
                <!-- 하단 sns배너 링크설정 -->
                <!--<p class="ban_sns"><img src="../../img/mimg/ban_facebook.gif" usemap="#ban_sns" alt="페이스북 배너" /></p>-->
            </div><!-- //inner2 -->

            <div class="inner2 footer_coment_zone">
                <ul class="footer_coment_list">
                    <li>
                        사이버몰 내 판매되는 상품 중에는 올디프에 등록한 개별 판매자가 판매하는 마켓플레이스(오픈마켓) 상품이 포함되어 있습니다.

                        마켓플레이스(오픈마켓) 상품의 경우 올디프는 통신판매중개자이며 통신판매의 당사자가 아닙니다.

                        올디프는 마켓플레이스(오픈마켓) 상품, 거래정보 및 거래 등에 대하여 책임을 지지 않습니다.

                        올디프는 소비자 보호와 안전거래를 위해 고객관리센터(vmnetworks@naver.com)를 운영하고 있으며, 관련 분쟁이 발생할 경우 별도의 분쟁처리절차에 의거 분쟁이
                        처리됩니다.
                    </li>
                </ul>
            </div>
        </div><!-- //footer_section3 -->
    </div>
    <!-- //footer -->
</template>

<script>
    export default {
        name: 'Footer'
    }
</script>

<style>
    .cboth {
        clear: both;
        *zoom: 1;
    }

    #footer {
        width: 1100px;
        margin: 40px auto 0;
        padding: 0;
    }

    .footer_section2 {
        width: 705px;
        margin-left: 356px;
        text-align: center;
        height: 30px;
        line-height: 30px;
        position: absolute;
    }

    .footer_section2 .inner {
        width: 768px;
        margin: 0 auto;
        background-color: #fff;
    }

    .footer_section2 .inner .bt_menu {
        display: flex;
        justify-content: space-between;
            padding-left: 70px;
    }

    .footer_section2 .inner li a {
        font-size: 13px;
        font-weight: 500;
    }

    .footer_section2 .inner .bt_menu .private {
        color: #396ef3;
    }

    .footer_section3 .inner2 {
        margin: 5px auto 0 auto;
        height: 250px;
        background-color: #fff;
        border-bottom: 1px solid #e6e6e6;
    }
  

    .footer_section3 .inner2 .bt_cscenter {
        float: left;
        width: 40.7%;
        height: 200px;
        box-sizing: border-box;
        padding: 14px 0 0 12px;
    }
      .footer_section3 .inner2 .bt_cscenter p {
    font-size: 11px;
    color: #868585;
    line-height: 20px;
}
.footer_section3 .inner2 .bt_cscenter p span {
    color: #222;
}
    .footer_section3 .inner2 .bt_cscenter .title01 {
    display: inline-block;
    font-size: 20px;
    color: #222;
    font-weight: 700;
}
.footer_section3 .inner2 .bt_cscenter .title02 {
    display: inline-block;
    font-size: 20px;
    color: #396ef3;
    font-weight: 700;
    margin-left: 5px;
}
.footer_section3 .inner2 .bt_cscenter .title03 {
    display: block;
    font-size: 16px;
    color: #333;
    margin-bottom: 2px;
    margin-top: 2px;
}
.footer_section3 .inner2 .bt_cscenter .phone {
    display: block;
    width: 100%;
    margin: 3px 0 9px 0;
}
.footer_section3 .inner2 .bt_cscenter .phone .phone01 {
    display: inline-block;
    font-size: 28px;
    font-weight: 700;
    color: #222;
    margin-top: 5px;
    margin-bottom: 5px;
}
.footer_section3 .inner2 .bt_cscenter .email {
    margin: 0 0 10px;
}
.footer_section3 .inner2 .bt_cscenter .email .email01 {
    display: inline-block;
    color: #999;
    font-size: 14px;
}
.footer_section3 .inner2 .bt_cscenter .email .email02 {
    display: inline-block;
    color: #222;
    margin-left: 5px;
    font-size: 14px;
}

    .footer_section3 .inner2 .copy {
    width: 50%;
    float: left;
    padding: 45px 0 0 25px;
    font-size: 12px;
    color: #999;
    text-align: left;
    margin-left: -46px;
}
.footer_section3 .inner2 .copy span {
    font-weight: 500;
    font-size: 13px;
    color: #000;
}
.footer_section3 .footer_coment_zone {
    width: 1100px;
    height: 83px;
    padding-top: 10px;
}
.footer_section3 .footer_coment_zone .footer_coment_list {
    width: 1050px;
    margin: 0 auto;
    list-style: none;
    font-size: 12px;
    line-height: 20px;
    margin-top: -10px;
    color: #a9a9a9;
    background: #f7f7f6;
    padding: 6px 25px;
}
</style>