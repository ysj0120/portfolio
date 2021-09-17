<template>
    <div class="header_section03">
		<!-- 전체 카테고리 자동출력 -->
        <div class="btn_all_menu_open">
            <a href="#"><img src="../../assets/cateporyimg.png">전체 카테고리</a>
        </div>

		<ul class="top_menu"><!-- 카테고리 수동출력 -->		
			<!-- <li><a href="#" class="btn_all_menu_open"><img src="../assets/cateporyimg.png">전체 카테고리</a></li> -->
			<li><a href="#">추석특가</a></li>
			<li><a href="#">플렉스위크</a></li>
			<li><a href="#">할인클럽</a></li>
			<li><a href="#">오늘의 추천</a></li>
			<li><a href="#">신상</a></li>
			<li><a href="#">베스트</a></li>
			<li><a href="#">무료배송</a></li>
			<li><a href="#">기획전</a></li>
			<li><a href="#">쿠폰</a></li>
		</ul><!-- //top_menu -->
		<!--<div class="gnb_allmenu_wrap"></div>-->
		
		
	</div>
</template>

<script>
export default {
    name:'TopMenu'
    
}
</script>

<style>
.header_section03{position: relative;
    
    width: 1100px;
    z-index: 41;
    height: 36px;
    clear: both;
    display: flex;
    justify-content: center;
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;margin: 0 auto;}
.top_menu{
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    height: 36px;
}

.btn_all_menu_open{
    font-size: 14px;
    
    text-align: start; width: 196px; border-right: 1px solid #ddd; border-left: 1px solid #ddd;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.btn_all_menu_open img{
    position: relative;height: 15px;
}
.header_section03 .top_menu li {
    float: left;
    width: 9.1%;
    height: 35px;
    line-height: 36px;
    text-align: center;
}
.header_section03 .top_menu li a {
    font-size: 16px;
    font-weight: 500;
    color: #000000;
}
</style>