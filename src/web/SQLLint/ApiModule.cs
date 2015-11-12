using System;
using Nancy;
using NSQLFormatter;

namespace BeautifulSQL
{
    public class ApiModule : NancyModule
    {
        public ApiModule()
        {
            Post["/api"] = (ctx) =>
            {
                try
                {
                    var original = Request.Form.data;
                    var result = Formatter.Format(original);

                    return result;
                }
                catch (Exception)
                {
                    return HttpStatusCode.BadRequest;
                }
            };
        }
    }
}