using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.models;
using Microsoft.AspNetCore.Components.Web;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookController : ControllerBase
    {
        // GET: api/Book
        [HttpGet]
        public List<Book> Get()
        {
            List<Book> books = new List<Book>();
            string[] bookCategories = {"Fiction", "Fantasy"};
            books.Add(new Book(){Title = "OathBringer", Author = "Bandon Sanderson", Categories = bookCategories});
            string[] bookCategories2 = {"Fantasy", "Magic"};
            books.Add(new Book(){Title = "Way of Kings", Author = "Brandon Sanderson", Categories = bookCategories2});
            return books;
        }

        // GET: api/Book/5
        [HttpGet("{id}", Name = "Get")]
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Book
        [HttpPost]
        public void Post([FromBody] Book value)
        {
            System.Console.WriteLine(value.ToString());
        }

        // PUT: api/Book/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/Book/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
