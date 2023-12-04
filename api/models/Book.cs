namespace api.models
{
    public class Book
    {
        public string Title {get; set;}
        public string Author {get; set;}
        public string[] Categories {get; set;}

        public override string ToString(){
            string returnString = Title + " " + Author + " ";
            for(int i = 0; i < Categories.Length; i++){
                returnString += Categories[i] + " ";
            }
            return returnString;
        }
    }
}