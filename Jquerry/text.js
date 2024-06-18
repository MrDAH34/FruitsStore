
$(document).ready(function(){

    var IPusername = $("#IPusername");
    var IPemail = $("#IPemail");
    var IPphone = $("#IPphone");
    
    
    var tbusername = $("#tbusername") ;
    var tbemail = $("#tbemail");
    var tbphone = $("#tbphone") ;
    

    // check Name 

    function CheckHoten(){
        var re = /^[A-Z][a-zA-Z]*(\s[A-Z][a-zA-Z]*)+$/;
        if (IPusername.val() == "") {
          tbusername.html("* Bắt buộc nhập");
          return false;
        }
        if (!re.test(IPusername.val())) {
          tbusername.html("* Họ tên phải từ 2 từ trở lên và phải viết hoa kí tự đầu");
          return false;
        }
        tbusername.html("<br>");
        return true;
      }
    
      IPusername.blur(CheckHoten);
// check mail 

      function checkMail(){
        var regexMail = /^[\d\w]{3,}\@gmail\.com$/
        if(IPemail.val()===""){
          tbemail.html("* Bắt buộc nhập");
          return false;

        }
        if(!regexMail.test(IPemail.val())){
          tbemail.html("Email có dạng: username@gmail.com");
          return false ;

        }
        tbemail.html("<br>");
        return true ;

      }
      IPemail.blur(checkMail);
// check Phone

     function checkPhone(){
        var  regexPhone = /^0\d{9}$/
        if (IPphone.val() ===""){
          tbphone.html("* Bắt buộc nhập");
          return false ;
        }
        if(!regexPhone.test(IPphone.val())){
          tbphone.html("Email có dạng: 0XXXXXXXXX");
          return false ;

        }
        tbphone.html("<br>");
        return true ;
      }
      IPphone.blur(checkPhone);

    // check Address ; 
      
    var IPaddress = $("#IPaddress") ;
    var tbaddress = $("#tbaddress");
    function checkAddress(){
      if (IPaddress.val()==""){
        tbaddress.html("* Bắt buộc nhập");
        return false ;
      }
      tbaddress.html("<br>");
      return true ;

    }
    IPaddress.blur(checkAddress);



    // check Mess 
    var IPmess = $("#IPmess");
    var tbmess = $("#tbmess") ;

    function checkMess(){
      
      if (IPmess.val()==""){

        tbmess.html("* Bắt buộc nhập") ;
         return false ;
      }

      tbmess.html("<br>");
      return true ;


    }
   $("#IPmess").blur(checkMess);
    

   function reloadandcheck(){
       var IPusername = $("#IPusername");
       var IPemail = $("#IPemail");
       var IPphone = $("#IPphone");
       var IPaddress = $("#IPaddress");
       var IPmessage = $("#IPmess");

       // Kiểm tra nếu tất cả các trường được điền đầy đủ
       if (CheckHoten() &&  checkMail() && checkPhone() && checkAddress() && checkMess()) {

        var newModal = `
        <div class="modal fade" id="ModalSentMessage" tabindex="-1">
                            <div class="modal-dialog modal-dialog-centered">
                              <div class="modal-content">
                                <div class="modal-body">
                                  <div class="imgContain">
                                    <img src="../DUAN1/Image/check-solid.svg" alt="">
                                  </div>
                                  <div>Success Sent</div>
                                  <div>Thanks for sending!</div>
                                </div>
                              </div>
                            </div>
                        </div>
        `
        $("#displayModal").append(newModal);
        $("#ModalSentMessage").modal("show"); // Thoát khỏi hàm nếu có bất kỳ trường nào trống
        IPusername.val("");
        IPemail.val("");
        IPphone.val("");
        IPaddress.val("");
        IPmessage.val("");
        $("#textdisplayModal").html("");
        return true ;
       }else{
        $("#textdisplayModal").html("* Bạn nhập dữ liệu sai vui lòng kiểm tra lại!!");
        return false;
       }
      
   }

 $("#sendmess").click(reloadandcheck);


})



