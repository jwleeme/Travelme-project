<template>
  <div class="joincontainer">
    <div class="inner">
      <h1 class="jointitle">
        SIGN UP
      </h1>
      <p class="join_subtitle">
        나를 위한 추천 여행지 코스 - TravelME
      </p>

      <form @submit.prevent="formSubmit">
        <div>
          <label for="nickname">닉네임</label>
          <input
            v-model="nickname"
            type="text"
            id="nickname" 
            maxlength="15"
            autocomplete="off" />
        </div>
        <div
          class="idarea">
          <label for="id">아이디</label>
          <input
            v-model="userid"
            type="text"
            id="userid"
            maxlength="10" 
            autocomplete="off" />
          <button class="idchk">
            확인
          </button>
        </div>
        <div>
          <label for="pw">비밀번호</label>
          <input
            v-model="userpw"
            type="password"
            id="userpw" 
            maxlength="15"
            :rules="userpw" />
        </div>
        <div>
          <label for="pwchk">비밀번호 확인</label>
          <input
            v-model="pwchk"
            type="password"
            id="pwchk"
            maxlength="15"
            :rules="userpw2" 
            @change="validateCheckPw" />
        </div>

        <div>
          <label
            for="email"
            class="emaillabel">이메일</label>
          <input
            v-model="email"
            type="email"
            id="useremail"
            maxlength="25" 
            autocomplete="off" />
        </div>

        <div class="agree-checkbox">
          <input
            type="checkbox"
            id="infoconsent" />
          <label for="infoconsent"><span>개인정보수집에 동의합니다.</span></label>
        </div>
        <div>
          <button class="joinbtn">
            회원가입
          </button>
          <button class="backbtn">
            뒤로가기
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  methods: {
  validateCheckPw() {
      let userpw = document.getElementById('userpw').value
      let checkedPw = document.getElementById('pwchk').value

      if(checkedPw.search(/\s/) !== -1) {
        alert("비밀번호는 공백없이 입력해주세요!");
        return false;
      } else if(userpw !== checkedPw) {
        alert("비밀번호가 맞지 않습니다.")
      } else {
        console.log("통과");
        return true;
      }
    }
  },
  name: 'JoinPage'
}

</script>

<style lang="scss" scoped>

.joincontainer {
  padding-top: 120px;
  font-family: 'Noto Sans KR','돋움';
  text-align: center;

  .jointitle {
    color: #283a2c;
    font-size: 55px;
    font-family: 'LeferiPoint-BlackA','SeoulNamsan';
    text-align: center;
    line-height: 1.5;
    border-bottom: 3px solid #F74C25;
    
  }
  .join_subtitle {
    color: #494a4b;
    font-size: 17px;
    margin: 20px 0 25px 0;
  }

  /* 폼 영역 */
  form {
    width: 100%;
    padding: 25px 0px;
    border-radius: 10px;
    background-color: #6b97b9;
    text-align: center;
    
    div {
      line-height: 3.5;
      label {
        display: inline-block;
        width: 100px;
        font-size: 16px;
        font-weight: 500;
        text-align: left;

      }
      .emaillabel {
        margin-left: 50px;
      }
      input {
        display: inline-block;
        width: 200px;
        height: 30px;
        text-align: center;
        font-size: 15px;
        border: 0;
        border-radius: 15px;
        padding-left: 10px;
        background-color: rgb(233, 233, 233);
        margin-left: 15px;
        margin-right: 20px;
      }
      .idchk {
        width: 70px;
        height: 35px;
        background-color: #FFB025;
        border: none;
        border-radius: 10px;
        font-size: 17px;
        font-weight: 500;
        &:hover, 
        &:focus {
          border: 2px solid #FFB025;
          background-color: floralwhite;
          cursor: pointer;
        }
      }
      &.idarea label {
        margin-left: 70px;
      }
      
    }
    #useremail {
      width: 250px;
    }
    .agree-checkbox {
      display: block;
      margin-top: 15px;
      margin-left: 20px;
      margin-bottom: 30px;
      border-radius: 15px;

      input[type='checkbox'] {
        display: none;
        &:checked {
          &+label::before {
            opacity: 1;
          }
        }
      }
      label {
        width: auto;
        cursor: pointer;
        span {
          display: inline-block;
          vertical-align: middle;
        }
        &::before {
          content: '';
          display: inline-block;
          vertical-align: middle;
          width: 30px;
          height: 30px;
          background: url("../assets/img/round-checkmark.png") 50% 50% / contain no-repeat;
          opacity: .3;
          margin-right: 10px;
        }
      }
    }

    .joinbtn,
    .backbtn {
      display: block;
      width: 320px;
      height: 40px;
      margin: 20px auto;
      border: none;
      border-radius: 10px;
      color: #fff;
      font-size: 17px;
      font-weight: 500;
      cursor: pointer;
    }
    .joinbtn {
      background: #F74C25;
    }
    .backbtn {
      background: #283a2c;
    }
    
  }

}
</style>