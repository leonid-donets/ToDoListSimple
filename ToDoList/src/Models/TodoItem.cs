using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

using System.ComponentModel.DataAnnotations;

public class TodoItem
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string? Id { get; set; }  // nullable

    [BsonElement("title")]
    [Required]
    public string Title { get; set; }

    [BsonElement("isDone")]
    public bool IsDone { get; set; } = false;
}
