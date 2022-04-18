$(document).ready(function () {
  $.ajax({
    type: "GET",
    url: "./projects/projects.json",
    dataType: "json",
    success: function (responseData, status) {
      const projects = responseData.projects;

      var output = "<ul>";
      $.each(projects, function (i, project) {
        const links = project.links;

        const linkContainer = links.length === 1;

        output += `<li ${linkContainer ? "class='route-container'" : ''}>`;
        if (linkContainer)
          output += "<a href='" + links[0].route + "' target='_blank'>";

        output += `<div class='project-header'>
                      <h2>${project.name}</h2>
                      <div class="icon">×</div>
                      <div class="icon">×</div>
                      <div class="icon">×</div>
                      <div class="icon">×</div>
                      <p class="special-char">≈</p>
                    </div>
                    <div class="project-info">
                      <p>
                        ${project.description}
                      </p>
                    </div>`;
        
        if (linkContainer) output += "</a>"
        else {
          output += `<div class="multiple-links">`
          $.each(links, function (i, link) {
            output += `<div class="route-container"> 
                         <a href="${link.route}">
                           <p class="link">
                             ${link.text}
                           </p>
                         </a>
                       </div>`
          }
          )
          output += `</div>`
        };
        output += "</li>";
      });
      output += "</ul>";

      console.log(output);
      $("#projects").html(output);
    },
    error: function (msg) {
      // there was a problem
      alert("There was a problem: " + msg.status + " " + msg.statusText);
    },
  });
});
