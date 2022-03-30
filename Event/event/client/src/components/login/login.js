const login=()=>{
    return <div >
       <center>
<h2>User Login </h2>
<form action="login.php" method="post"/>
<table>
<tr>
<td>USER NAME: </td>
<td>
<input type="text" name="user"/>
</td>

</tr>
<tr>
                    <td> PASSWORD:
                    </td>
                    <td>
                    <input type="PASSWORD" name="user_pass"/>
                     </td>
</tr>
<tr>
<td>
<input type="Submit" name="Submit"
value="Login"/>

</td>
<td>
Not yet a Member ?<a href="">Register</a>
 </td>
                   
</tr>

</table>

</center>
        
    </div>
}
export default login;