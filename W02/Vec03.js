Vec03 = function( x,y,z )
{
  this.x = x;
  this.y = y;
  this.z = z;
}

Vec03.prototype.min = function()
{
  min = this.x;
  if ( min > this.y )
  min = this.y;
  if ( min > this.z )
  min = this.z;
  document.writeln( min );
}

Vec03.prototype.mid = function()
{
  mid = this.x;
  if (mid > this.y && mid > this.z)
  {
  mid = this.y;
  if ( mid < this.z )
  mid = this.z;
  }
  else if (mid < this.y && mid < this.z)
  {
    mid = this.y;
    if( mid > this.z )
    mid = this.z;
  }
document.writeln( mid );
}

Vec03.prototype.max = function()
{
  max = this.x;
  if ( max < this.y )
  max = this.y;
  if ( max < this.z )
  max = this.z;
  document.writeln( max );
}
