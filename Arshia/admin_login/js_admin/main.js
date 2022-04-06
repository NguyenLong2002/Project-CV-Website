const edit_add = document.querySelectorAll("#edit");
            const add = document.getElementById("Add");
            const add_succeed = document.getElementById("add-succeed")
            // console.log(add_succeed)
            for(let i =0; i<edit_add.length;i++){
                // console.log(edit_add[i]);
                edit_add[i].onclick= function(){
                add.style.display="Block";
                }
            }
            add_succeed.onclick= function(){
                add.style.display="none";
            }
const fullName = document.getElementsByClassName("name");