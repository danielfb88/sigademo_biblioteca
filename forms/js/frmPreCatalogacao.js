function buscaCutter(url,idCampoAutor,idCampoTitulo,idCampoObra) 
{
	xWalkTree(xGetElementById('m-container'), function(e){e.style.cursor = 'wait'});
    autor = xGetElementById(idCampoAutor);
    titulo = xGetElementById(idCampoTitulo);
    //obra = xGetElementById(idCampoObra);
	skip = xGetElementById(edtSkip);
	
	//if(skip && !isNaN(skip.value))
		//skip.value = 0;
	
    cp.set_response_type("TEXT");
    //if (obra == undefined)
   // {
    	cp.call(url, "ajax_frmPreCatalogacao_BuscaCutter", doTextTipo_result, autor.value, titulo.value, skip.value);
   // }
    //else
    //{
    //	cp.call(url, "ajax_frmPreCatalogacao_BuscaCutter", doTextTipo_result, autor.value, titulo.value,obra.value, skip.value);
    //}
}	

function doTextTipo_result(result) 
{
	
	var no = document.getElementById("edtCutter");
    var noPai = no.parentNode;	
    noPai.innerHTML = result;
    xWalkTree(xGetElementById('m-container'), function(e){e.style.cursor = 'auto'});
}