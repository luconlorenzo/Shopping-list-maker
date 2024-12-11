using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ShoppingListMaker.Migrations
{
    /// <inheritdoc />
    public partial class update_list : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Objects_List_ListId",
                table: "Objects");

            migrationBuilder.DropPrimaryKey(
                name: "PK_List",
                table: "List");

            migrationBuilder.RenameTable(
                name: "List",
                newName: "Lists");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Lists",
                table: "Lists",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Objects_Lists_ListId",
                table: "Objects",
                column: "ListId",
                principalTable: "Lists",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Objects_Lists_ListId",
                table: "Objects");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Lists",
                table: "Lists");

            migrationBuilder.RenameTable(
                name: "Lists",
                newName: "List");

            migrationBuilder.AddPrimaryKey(
                name: "PK_List",
                table: "List",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Objects_List_ListId",
                table: "Objects",
                column: "ListId",
                principalTable: "List",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
