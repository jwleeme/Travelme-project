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
            v-model="formData.joinNickname"
            type="text"
            id="nickname" 
            maxlength="10"
            autocomplete="off"
            @change="nickNameCheck"
            oninvalid="this.setCustomValidity('필수 입력 값 입니다.')"
            oninput="setCustomValidity('')"
            required />
        </div>
        <div
          class="idarea">
          <label for="id">아이디</label>
          <input
            v-model="formData.id"
            type="text"
            id="userid"
            maxlength="10"
            autocomplete="off"
            @change="idChanged"
            oninvalid="this.setCustomValidity('아이디는 필수 입력 값 입니다.')"
            oninput="setCustomValidity('')"
            required />

          <button
            class="idchk"
            @click="idDuplicate">
            확인
          </button>
          <p
            v-if="idValid_1"
            class="alertbox">
            아이디에는 공백이 들어갈 수 없습니다.
          </p>
          <p
            v-if="idValid_2"
            class="alertbox">
            유효하지 않은 형태의 아이디입니다.
          </p>
          <p
            v-if="idValid_3"
            class="alertbox">
            아이디 중복체크는 필수입니다.
          </p>
        </div>
        <div>
          <label for="pw">비밀번호</label>
          <input
            v-model="formData.pw"
            type="password"
            id="userpw" 
            maxlength="15"
            autocomplete="off"
            
            oninvalid="this.setCustomValidity('비밀번호는 필수 입력 값 입니다.')"
            oninput="setCustomValidity('')"
            required />
          <!-- <p
            v-if="pwValid"
            class="alertbox">
            비밀번호는 최소 5글자 이상 15글자 이하로 작성해주세요.
          </p> -->
        </div>
        <div>
          <label for="pwchk">비밀번호 확인</label>
          <input
            v-model="joinPwchk"
            type="password"
            id="pwchk"
            maxlength="15"
            autocomplete="off"
            @change="validateCheckPw"
            oninvalid="this.setCustomValidity('비밀번호 확인은 필수입니다.')"
            oninput="setCustomValidity('')"
            required />
        </div>
        <p
          v-if="pwMissMatch"
          class="alertbox">
          비밀번호가 맞지 않습니다.
        </p>

        <div>
          <label
            for="email"
            class="emaillabel">이메일</label>
          <input
            v-model="formData.joinEmail"
            type="email"
            id="useremail"
            maxlength="25" 
            autocomplete="off"
            oninvalid="this.setCustomValidity('이메일은 필수 입력 값입니다.')"
            oninput="setCustomValidity('')"
            required />
        </div>

        <div class="agree-checkbox">
          <input
            v-model="agree"
            type="checkbox"
            id="infoconsent" />
          <label for="infoconsent">
            <span>개인정보수집에 동의합니다.</span></label>
        </div>

        <div>
          <button
            class="joinbtn">
            회원가입
          </button>
          <button
            @click="backBtn"
            class="backbtn">
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
      formData: {
        joinNickname: '',
        id: '',
        pw: '',
        joinEmail : '' 
      },
      joinPwchk: '',
      agree: false,
      pwMissMatch: false,
      // pwValid: false,
      idValid_1: false,
      idValid_2: false,
      idValid_3: false,
      idDuplicateCheck: false, // 버튼 중복체크를 눌렀는지 안눌렀는지 확인하기 위한 변수
    }
  },
  computed: {
    
  },
  methods: {

    formSubmit() {
      if (!this.formCheck()) {
          return;
      }

      if (!this.agree) {
        return alert("개인정보 동의에 체크해주세요!");
      }

      // 저장
      let userList = [];

      if (localStorage.getItem('userList')) {
        console.log(JSON.parse(localStorage.getItem('userList')))
        userList = JSON.parse(localStorage.getItem('userList'))
       
      }
      userList.push(this.formData)
      localStorage.setItem('userList', JSON.stringify(userList))

      this.formData.joinNickname = ''
      this.formData.id = ''
      this.formData.pw = ''
      this.formData.joinEmail = ''
      this.joinPwchk = ''
      this.agree = false
      this.pwMissMatch = false

      this.$router.push({path: '/'}) // 루트 페이지로 이동 (라우팅)
    },

    nickNameCheck() {
      let nullCheck = /\s/; // 공백체크
      // let textLimit = /^[a-z0-9]+$/;

      if (nullCheck.test(this.formData.joinNickname)) {
        alert('공백없이 입력해주세요!') // 닉네임 알림창
        document.getElementById('nickname').focus();
        this.formData.joinNickname = '';
        return false;
      } 
      return true;

    },
    idChanged() {
      // 아이디가 바뀌었을때
      this.idDuplicateCheck = false; // 중복체크 초기화
      this.idValid_3 = false;

      this.idCheck();

    },
    // 아이디 유효성 검사 (공백, 특수문자 체크)
    idCheck() {
      
      // 알림문구 초기화
      this.idValid_1 = false;
      this.idValid_2 = false;
      
      
      let nullCheck = /\s/; // 공백
      let textCheck = /[~!@#$%^&*()_+|<>?:{}]/g; // 특수문자

      if (nullCheck.test(this.formData.id)) {
        this.idValid_1 = true
        return false;
      }
      if (textCheck.test(this.formData.id)) {
       console.log(textCheck.test(this.formData.id)) 
        this.idValid_2 = true
        return false;
      }
      return true;


    },

  // form을 submit 하기전 form 내 모든 유효성 검사 체크.
  formCheck() {
    
    if (!this.nickNameCheck()) {
      return false;
    }
    if (!this.idCheck()) {
      return false;
    }

    if (this.idDuplicateCheck !== true) {
      this.idValid_3 = true // 중복체크해주세요!
      return false;
    }
    return true;

  },

  // 아이디 중복체크
  idDuplicate(e) {
    e.preventDefault(); // 이벤트 전파방지

    // 아이디 입력없이 중복체크(확인) 했을때
    if (this.formData.id === '') {
      return alert("아이디를 입력 후 중복확인해주세요!")
    }
    const userList = JSON.parse(localStorage.getItem('userList'))
    const duplicated = userList.find((user) => {
      if (this.formData.id === user.id) {
        return user
      }
    })

    if (duplicated) {
      alert("중복되는 아이디가 있습니다!")
      return;
    } else {
      alert("사용가능한 아이디입니다.")
    }

    this.idDuplicateCheck = true 
    this.idValid_3 = false
    

  },
  validateCheckPw() {
    
    this.pwMissMatch = false
    
    if(this.formData.pw.search(/\s/) !== -1) {
      alert("비밀번호는 공백없이 입력해주세요!");
      this.formData.pw = ''
      this.joinPwchk = ''
      return false;
    } else if (this.formData.pw !== this.joinPwchk) {
      this.pwMissMatch = true
    } else {
      return true;
    }
  },
    backBtn(e) {
    e.preventDefault(); // 이벤트 전파방지(submit 방지)
    return this.$router.push({path: '/'})
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
      margin: 15px auto;
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
    .alertbox {
      font-size: 14px;
      color: red;
      font-weight: 400;
      margin-top: 10px;
      margin-left: 85px;
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