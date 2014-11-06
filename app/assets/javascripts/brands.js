//Hash for Brands
var brands = [
{key:"Mr. Boho",
value: "img_1"},
{key:"Carmina",
value: "img_2"},
{key:"Gant",
value: "img_3"},
{key:"And Other Stories",
value: "img_4"},
{key:"Laguna B",
value: "img_5"}
]

var links = document.getElementsByClassName("brand");
for (var i=0;i<links.length;i++)
{
	links[i].onclick=pressBrand;
}

function pressBrand(event) {
	var encontrado;
	var x= 0;
	var images = 5;


	for (var i=1;i<=images;i++)
	{
		document.getElementById("img_"+i).style.display="none";
	}
	
	var marca=event.target.firstChild.nodeValue;

	var imgBrand

	var imgBrand;


	while(x<brands.length&&!encontrado)
	{
		if (brands[x].key==marca)
		{
			imgBrand=document.getElementById(brands[x].value);
			encontrado=true;
		}
		x++;
	}
	imgBrand.style.display="inline";
}

