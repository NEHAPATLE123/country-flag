 //alert("hello")
 
 var cl =console.log;
 
 let infotbody = document.getElementById("countrycontainer");
 
 let result = "";
 
 countries.forEach(function(countrieinfo){
	 result += ` 
	   <div class="col-sm-3">
		  <div class="card p-1 mb-3">
		    <div class="card-body">
				<div class="flag">
					<img src="${countrieinfo.flag}" alt="${countrieinfo.name}" title="${countrieinfo.name}">	
				</div>
				<h3 class="cName">
				       ${countrieinfo.name}
				</h3>
				 <div class="details"> 
					   <p>
						  <strong>    
							 capital:
						  </strong>
							 ${countrieinfo.capital}
					   </p>
					   <p>
						   <strong>
							  languages:
						   </strong>
							 ${countrieinfo.languages}
					   </p>
					   <p>
						   <strong>
							  population:
						   </strong>
							 ${countrieinfo.population}
					   </p>
				 </div>
			  </div>
	
		  </div>
		</div>
	   `
	 
 })
 
 infotbody.innerHTML = result;