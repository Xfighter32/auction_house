CREATE PROCEDURE FIND_ITEM (pIdItem NUMBER) AS --RETORNAR EL PRODUCTO? O VALIDAR CONTRA LA BASE
BEGIN
    SELECT idItem FROM Items WHERE idItem = pIdItem;
END;

CREATE PROCEDURE FIND_AUCT (pIdItem NUMBER) AS --RETORNAR EL PRODUCTO? O VALIDAR CONTRA LA BASE
BEGIN
    SELECT idItem FROM Items WHERE idItem = pIdItem;
END;


CREATE PROCEDURE CREATE_ITEM(pIdItem NUMBER,pIdSubcategoria NUMBER,pPrecioBase NUMBER,pDescripcion VARCHAR2,pImagen BLOB) AS
BEGIN
    INSERT INTO Items(pIdItem,pIdSubcategoria,pPrecioBase,pDescripcion,pImagen);
END;

CREATE PROCEDURE AUCT_ITEM(IdSubasta NUMBER,IdItemSubastado NUMBER,IdVendedor NUMBER,FechaHoraCierre TIMESTAMP,DetallesDeEntrega VARCHAR2) AS --vOY A DEJAR QUE SE LE PONGA UN NUMERO O LO SUMO CON UN CONSECUTIVO?
BEGIN
    INSERT INTO Subastas(IdSubasta,IdItemSubastado,IdVendedor,FechaHoraCierre,DetallesDeEntrega);
END;