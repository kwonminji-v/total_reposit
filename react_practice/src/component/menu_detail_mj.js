import react from "react";
import style from '../css/menu_detail_mj.module.css'

function MenuDetail_MJ() {

    return (
        <>
            <div className={style.detail_box}>
                <div className="menu_detail_box">
                    <div className={style.menu_btn_box}>
                        <button>상품 안내</button>
                        <button>사용 방법</button>
                        <button>상세 정보</button>
                        <button>유의 사항</button>
                    </div>
                    <div className={style.menu_img_box}>
                        <div><img src={process.env.PUBLIC_URL + '/cgv_상세정보.jpg'} /></div>
                        <div><img src={process.env.PUBLIC_URL + '/cgv_유의사항.jpg'} /></div>
                    </div>
                </div>
                <div className={style.side_box}>
                    <div className={style.side_detailcontent}>
                        <div className={style.side_detail_text}>
                            <b style={{ fontSize: "35px" }}>넷플릭스 월정액</b>
                            <span><img src={process.env.PUBLIC_URL + '/icon_share.png'} /></span>
                        </div>
                        <button className={style.side_optionbtn}>옵션 : 베이식 (동시접속 1명, HD화질)</button>
                        <div>
                            <div>
                                <small className={style.saleprice}>월 9,500원</small><br></br>
                                <span className={style.percent}>5%</span>475원 할인
                                <button className={style.side_addbtn}>+ 담기</button>
                            </div>
                        </div>
                    </div>
                    <div className={style.side_detailbtn}>
                        다른 구독 상품 보러가기
                    </div>
                </div>
            </div >
        </>
    );
};

export default MenuDetail_MJ;
