<?php

     define('SITEURL','http://localhost/lab6/');
     define('LOCALHOST','localhost');
     define('DB_USERNAME','root');
     define('DB_PASSWORD','');
     define('DB_NAME','lab6');

    $conn=mysqli_connect(LOCALHOST,DB_USERNAME,DB_PASSWORD);
    $db_select=mysqli_select_db($conn,DB_NAME) ;

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
        <h1 id="h11">CAT EXAM PROCESS</h1>
        <h1 id="h12">SCOPE</h1>
        <h2>VIT UNIVERSITY</h2>
<table rules="all">
                       <tr>
                               <th> Slot</th>
                               <th> Course Code</th>
                               <th> Course Title</th>
                               <th> Faculty ID</th>
                               <th> Reg No</th>
                               <th> Name</th>
                               <th> Faculty Name</th>
                               <th> Program</th>

                       </tr>
                <?php
                        $sql='SELECT * FROM  lab6';
                        $res=mysqli_query($conn,$sql);
                        if($res==TRUE){
                                $count=mysqli_num_rows($res);
                                if($count>0){
                                        while($rows=mysqli_fetch_assoc($res)){
                                                $Slot=$rows['Slot'];
                                                $Course_code=$rows['Coursecode'];
                                                $Course_name=$rows['Coursename'];
                                                $Faculty_id=$rows['FacultyId'];
                                                $Regnum=$rows['regnum'];
                                                $Student_name=$rows['Studentname'];
                                                $Faculty_name=$rows['facultyname'];
                                                $Student_branch=$rows['studentbranch'];
                                                $Course_status=$rows['status'];
                                                $Course_type=$rows['coursetype'];
                                                ?>

                                                <tr>
                                                        <td>
                                                           <?php echo $Slot;?>
                                                        </td>

                                                        <td>
                                                        <?php echo $Course_code;?>
                                                        </td>

                                                        <td>
                                                        <?php echo $Course_name;?>
                                                        </td>

                                                        <td>
                                                        <?php echo $Faculty_id;?>
                                                        </td>

                                                        <td>
                                                        <?php echo $Regnum;?>
                                                        </td>

                                                        <td>
                                                        <?php echo $Student_name;?>
                                                        </td>

                                                        <td>
                                                        <?php echo $Faculty_name;?>
                                                        </td>

                                                        <td>
                                                        <?php echo $Student_branch;?>
                                                        </td>



                                                </tr>
                                                <?php

                                        }
                                }
                        }
                      ?>
               </table>

</body>
</html>