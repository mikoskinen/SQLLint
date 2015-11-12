using System.Collections.Generic;
using System.Linq;
using System.Web;
using Nancy;
using Nancy.Responses;

namespace BeautifulSQL
{
    public class IndexModule : NancyModule
    {
        public IndexModule()
        {
            Get["/"] = (parameters) =>
            {
                return new GenericFileResponse("Content/index.html", "text/html");
            };
        }
    }
}