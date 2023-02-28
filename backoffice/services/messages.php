<?php
    error_reporting(0);
    
    require_once 'security.php';

    use App\Core\CRUD\Mensaje;
    //use App\Core\Box\Tools;

    require_once '../App/Core/CRUD/Mensaje.php';
    //require_once '../App/RedBox/uploader/RSFileUploader.php';
    //require_once '../Core/Box/Tools.php';

    date_default_timezone_set('America/Bogota');

    if ( !( isset($_POST['action']) || isset($_GET['action']) ) ) {
        die('{"success": 0, "error": "No action sent"}');
    }

    if($_GET['action'] == "list"){ listItems(); } 
    else if($_GET['action'] == "get"){ get(); }
    else if($_GET['action'] == "stats"){ stats(); } 
    else if($_POST['action'] == "create"){ create(); }
    else if($_POST['action'] == "markasviewed"){ markAsViewed(); }
    else{
        die('{"success": 0, "error": "No valid action or method"}');
    }



    function listItems () {
        $messageManager = new Mensaje();
        $message_list = $messageManager->find(array( "sort" => array("datetime" => "DESC") ));
        
        $response = array();
        
        $response["success"] = 1;
        $response["messages"] = $message_list;
        
        echo json_encode($response);
    }

    function get () {
        $messageManager = new Mensaje();

        $id  = filter_input(INPUT_GET, "mid", FILTER_SANITIZE_NUMBER_INT);
        if(empty($id)) die(json_encode(array("success" => 0, "error_msg" => "mid param has and invalid value")));

        $message = $messageManager->get($id);
        if(!$message){

        }
        
        $response = array();
        
        $response["success"] = 1;
        $response["messaje"] = $message;
        //$response["services_count"] = count($servicios);
        
        echo json_encode($response);
    }

    function stats () {
        $messageManager = new Mensaje();
        $message_list = $messageManager->find(array("estado" => "PENDIENTE"));
        
        $response = array();
        
        $response["success"] = 1;
        $response["messages_count"] = count($message_list);
        
        echo json_encode($response);
    }

    function create () {
        if($_POST['decoy'] != "") die(); //for robot detection

        if (
            empty($_POST['nombre']) ||
            empty($_POST['email']) ||
            empty($_POST['telefono']) ||
            empty($_POST['asunto']) ||
            empty($_POST['mensaje']) ||
            empty($_POST['empresa'])
        ){
            die('{"success": 0, "error": "Missing parameters"}');
        }

        $messaje = array();
        $messaje["nombre"] = filter_input(INPUT_POST, 'nombre', FILTER_SANITIZE_STRING);
        $messaje["email"] = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
        $messaje["telefono"] = filter_input(INPUT_POST, 'telefono', FILTER_SANITIZE_STRING);
        $messaje["asunto"] = filter_input(INPUT_POST, 'asunto', FILTER_SANITIZE_STRING);
        $messaje["mensaje"] = filter_input(INPUT_POST, 'mensaje', FILTER_SANITIZE_STRING);
        $messaje["empresa"] = filter_input(INPUT_POST, 'empresa', FILTER_SANITIZE_STRING);
        
        $messaje["datetime"] = date("Y-m-d H:i:s");
        $messaje["estado"] = "PENDIENTE";


        $messageManager = new Mensaje();
        $newId = $messageManager->create($messaje);

        $response = array();
        if($newId){
            $response["success"] = 1;
            $response["nid"] = $newId;
        }else{
            $response["success"] = 0;
            $response["error"] = "Register couldn't be created";
        }
        
        echo json_encode($response);
    }

    function markAsViewed () {
        $id = filter_input(INPUT_POST, "mid", FILTER_SANITIZE_NUMBER_INT);
        if(empty($id)) die(json_encode(array("success" => 0, "error_msg" => "mid param has and invalid value")));

        $messageManager = new Mensaje();
        $qres = $messageManager->updateOne(array("estado" => "VISTO"), $id);
        
        $message = $messageManager->get($id);

        $response = array();
        if($qres){
            $response["success"] = 1;
            $response["data"] = $message;
        }else{
            $response["success"] = 0;
            $response["error"] = "Register couldn't be updated";
        }
        
        echo json_encode($response);
    }










