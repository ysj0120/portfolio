<template>
    <div class="header">
        <div class="bn_header"></div>
            <div class="section_1">
                <ul class="top_btn_left">
                    <li><a href="#">파트너센터</a></li>
                    <li><a href="#">입점신청</a></li>
                </ul>
                <ul class="top_btn_right">
                    <li><a href="#">로그아웃</a></li>
                    <li><a href="#">맴버쉽</a></li>
                    <li><a href="#">즐겨찾기</a></li>
                    <li>
                        <a href="#">마이페이지</a>
                        <div class="inner">
                            <a href="#">나의쿠폰</a>
                            <a href="#">1:1 문의</a>
                            <a href="#">정보수정</a>
                            <a href="#">주문/배송조회</a>
                        </div>
                    </li>
                    <li><a href="#">고객센터</a></li>
                    <li><a href="#">장바구니</a></li>
                </ul>
            </div>
            <div class="section_2">
                <div class="top_logo">
                    <a href="#"><img src="../../assets/giflog.gif" alt=""></a>
                </div>
                <div class="serch">
                    <form>
                        <fieldset>
                            <legend>검색폼</legend>
                            <div class="top_text_cont">
                                <input type="text" id="search_form" name="keyword" class="top_srarch_text"
                                    title="검색어 입력" placeholder="올디프에서 검색하세요!" autocomplete="off">
                                <!-- <input type="image" src="./images/searchicon01.png" id="btnSearchTop"
                                        class="btn_top_srarch" title="검색" value="검색" alt="검색"> -->
                            </div>
                            <!-- //top_text_cont -->
                        </fieldset>
                    </form>
                </div>
                <div class="card">
                    <a href="#"><img src="../../assets/alldipeHeaderimg2.png" alt=""></a>
                </div>
            </div>
    </div>

</template>

<script>
export default {
    name:'Header'
}
</script>

<style>
ul{
    color: #000;
}
.section_1 {
    width: 1100px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.section_1 ul {
    display: flex;
    justify-content: space-between;
    height: 37px;
    line-height: 35px;
}

.section_1 ul li a {
    padding: 0 10px 0 10px;
}

.section_1 ul li .inner {
    display: none;
    position: absolute;
}

.section_1 ul li {
    position: relative;
}

.section_1 ul li:nth-child(4):hover .inner {
    display: block;
    display: flex;
    flex-direction: column;
    line-height: 20px;
    padding: 0;
}

.section_2 {
    height: 100px;
    width: 1100px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    overflow: hidden;
}

.top_text_cont {
    width: 450px;
    padding-top: 10px;
}

input {
    outline: none;
    display: block;
    width: 350px;
    height: 16px;
    font-size: 12px;
    line-height: 16px;
    color: #666;
    padding: 11px 0 9px 16px;
    margin: 4px 0 0 4px;
    border: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    border: 1px solid #666;
}

legend {
    display: none;
}



</style>